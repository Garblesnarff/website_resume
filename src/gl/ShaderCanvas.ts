/**
 * Tiny WebGL1 runner for one full-screen fragment shader.
 * Renders at a reduced internal resolution, pauses when off screen or
 * when the tab is hidden, and lowers resolution if frames get slow.
 */
export type UniformValue = number | [number, number] | [number, number, number];

export interface ShaderCanvasOptions {
  vertex: string;
  fragment: string;
  /** Internal resolution relative to CSS pixels. */
  scale?: number;
  minScale?: number;
  /** Called before each frame to update uniforms. */
  onFrame?: (time: number, set: (name: string, v: UniformValue) => void) => void;
  /** Render one frame only (reduced motion). */
  still?: boolean;
}

export class ShaderCanvas {
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private locs = new Map<string, WebGLUniformLocation | null>();
  private raf = 0;
  private running = false;
  private visible = true;
  private start = performance.now();
  private scale: number;
  private minScale: number;
  private slowFrames = 0;
  private lastFrame = 0;
  private ro: ResizeObserver;
  private io: IntersectionObserver;

  static supported(): boolean {
    try {
      const c = document.createElement('canvas');
      return Boolean(c.getContext('webgl'));
    } catch {
      return false;
    }
  }

  constructor(private canvas: HTMLCanvasElement, private opts: ShaderCanvasOptions) {
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
    if (!gl) throw new Error('WebGL not available');
    this.gl = gl;
    this.scale = opts.scale ?? 0.75;
    this.minScale = opts.minScale ?? 0.45;

    const vs = this.compile(gl.VERTEX_SHADER, opts.vertex);
    const fs = this.compile(gl.FRAGMENT_SHADER, opts.fragment);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || 'link failed');
    }
    this.program = program;
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    this.ro = new ResizeObserver(() => {
      this.resize();
      if (this.opts.still || !this.running) this.frame(performance.now(), true);
    });
    this.ro.observe(canvas);

    this.io = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      if (this.visible) this.loop();
    });
    this.io.observe(canvas);

    document.addEventListener('visibilitychange', this.onVisibility);
    this.resize();
  }

  private onVisibility = () => {
    if (!document.hidden) this.loop();
  };

  private compile(type: number, src: string) {
    const gl = this.gl;
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(s) || 'compile failed');
    }
    return s;
  }

  private resize() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(r.width * dpr * this.scale));
    const h = Math.max(1, Math.round(r.height * dpr * this.scale));
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
      this.gl.viewport(0, 0, w, h);
      // redraw at once so a resize never shows an empty frame
      if (this.locs.size) this.frame(performance.now(), true);
    }
  }

  set = (name: string, v: UniformValue) => {
    const gl = this.gl;
    if (!this.locs.has(name)) this.locs.set(name, gl.getUniformLocation(this.program, name));
    const l = this.locs.get(name);
    if (!l) return;
    if (typeof v === 'number') gl.uniform1f(l, v);
    else if (v.length === 2) gl.uniform2f(l, v[0], v[1]);
    else gl.uniform3f(l, v[0], v[1], v[2]);
  };

  private frame(now: number, force = false) {
    const t = (now - this.start) / 1000;
    this.opts.onFrame?.(t, this.set);
    this.set('uRes', [this.canvas.width, this.canvas.height]);
    this.set('uTime', t);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);

    // adaptive resolution: drop scale after sustained slow frames
    if (!force && this.lastFrame) {
      const dt = now - this.lastFrame;
      this.slowFrames = dt > 26 ? this.slowFrames + 1 : Math.max(0, this.slowFrames - 1);
      if (this.slowFrames > 20 && this.scale > this.minScale) {
        this.scale = Math.max(this.minScale, this.scale * 0.8);
        this.slowFrames = 0;
        this.resize();
      }
    }
    this.lastFrame = now;
  }

  loop = () => {
    if (this.opts.still) {
      this.frame(performance.now(), true);
      return;
    }
    if (this.running) return;
    this.running = true;
    this.lastFrame = 0;
    const tick = (now: number) => {
      if (!this.visible || document.hidden) {
        this.running = false;
        return;
      }
      this.frame(now);
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  };

  destroy() {
    cancelAnimationFrame(this.raf);
    this.running = false;
    this.ro.disconnect();
    this.io.disconnect();
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.gl.getExtension('WEBGL_lose_context')?.loseContext();
  }
}
