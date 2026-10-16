import * as THREE from 'three';

export interface FleetNode {
  id: string;
  weight: number; // 0..1, sets size and agent count
  color: [number, number, number];
}

interface FleetOptions {
  nodes: FleetNode[];
  labels: () => (HTMLElement | null)[];
  coreLabel?: () => HTMLElement | null;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  reducedMotion: boolean;
}

const SODIUM = new THREE.Color('#F0A43A');
const AURORA = new THREE.Color('#5FE3A1');
const CORE = new THREE.Color('#FFD9A0');

const glowVertex = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aAlpha;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uPx;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = aSize * uPx / -mv.z;
    vColor = aColor;
    vAlpha = aAlpha;
  }
`;
const glowFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float core = smoothstep(0.16, 0.0, d);
    float halo = exp(-d * 5.0) * 0.6;
    float a = (core + halo) * smoothstep(1.0, 0.7, d) * vAlpha;
    gl_FragColor = vec4(vColor * (0.6 + core * 1.2), a);
  }
`;

const agentVertex = /* glsl */ `
  attribute vec3 aTarget;
  attribute vec3 aLane;
  attribute float aSeed;
  attribute float aSpeed;
  attribute float aBack;
  attribute float aNode;
  uniform float uTime;
  uniform float uPx;
  uniform float uFocus;
  uniform vec3 uOut;
  uniform vec3 uBack;
  varying vec3 vColor;
  varying float vAlpha;

  vec3 bez(vec3 a, vec3 b, vec3 c, float t) {
    float u = 1.0 - t;
    return u * u * a + 2.0 * u * t * b + t * t * c;
  }

  void main() {
    float t = fract(aSeed + uTime * aSpeed);
    float tt = aBack > 0.5 ? 1.0 - t : t;
    vec3 a = vec3(0.0);
    vec3 c = aTarget;
    vec3 mid = c * 0.5 + vec3(0.0, length(c) * 0.18, 0.0) + aLane;
    vec3 pos = bez(a, mid, c, tt);
    // a little swarm jitter
    pos += aLane * 0.06 * sin(uTime * 2.0 + aSeed * 40.0);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float focused = uFocus < 0.0 ? 1.0 : (abs(aNode - uFocus) < 0.5 ? 1.6 : 0.12);
    float ends = smoothstep(0.0, 0.08, tt) * smoothstep(1.0, 0.9, tt);
    vAlpha = ends * 0.9 * min(focused, 1.0);
    vColor = aBack > 0.5 ? uBack : uOut;
    gl_PointSize = (0.045 + aSeed * 0.04) * uPx / -mv.z * (focused > 1.0 ? 1.35 : 1.0);
  }
`;
const agentFragment = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.0, d);
    gl_FragColor = vec4(vColor * 1.3, a * a * vAlpha);
  }
`;

export class FleetScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  private root = new THREE.Group();
  private spin = new THREE.Group();
  private nodePositions: THREE.Vector3[] = [];
  private nodeGlow!: THREE.Points;
  private agents!: THREE.Points;
  private dust!: THREE.Points;
  private links: THREE.Line[] = [];
  private raf = 0;
  private running = false;
  private visible = true;
  private clock = new THREE.Clock();
  private time = 0;
  private yaw = 0;
  private pitch = 0;
  private vYaw = 0;
  private dragging = false;
  private lastX = 0;
  private lastY = 0;
  private downX = 0;
  private downY = 0;
  private focus = -1;
  private hover = -1;
  private width = 1;
  private height = 1;
  private ro: ResizeObserver;
  private io: IntersectionObserver;
  private tmp = new THREE.Vector3();

  constructor(private container: HTMLElement, private opts: FleetOptions) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    const canvas = this.renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.touchAction = 'pan-y';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    this.camera.position.set(0, 1.6, 15);
    this.camera.lookAt(0, 0, 0);
    this.root.rotation.x = 0.5;
    this.root.add(this.spin);
    this.scene.add(this.root);

    this.build();

    canvas.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointermove', this.onMove, { passive: true });
    window.addEventListener('pointerup', this.onUp);
    canvas.addEventListener('pointerleave', this.onLeave);

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(container);
    this.io = new IntersectionObserver(([e]) => {
      this.visible = e.isIntersecting;
      if (this.visible) this.start();
    });
    this.io.observe(container);
    document.addEventListener('visibilitychange', this.onVis);
    this.resize();
    this.start();
  }

  private get small() {
    return this.width < 768;
  }

  private build() {
    const { nodes } = this.opts;
    const n = nodes.length;
    const R = 5.2;

    // node layout: a tilted ring with varied height
    nodes.forEach((_, i) => {
      const a = (i / n) * Math.PI * 2 + 0.4;
      const r = R * (0.82 + 0.18 * Math.sin(i * 2.3 + 1.0));
      this.nodePositions.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(i * 1.9) * 1.9, Math.sin(a) * r));
    });

    // core + node glows
    const count = n + 1;
    const pos = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const color = new Float32Array(count * 3);
    const alpha = new Float32Array(count);
    pos.set([0, 0, 0], 0);
    size[0] = 3.4;
    color.set([CORE.r, CORE.g, CORE.b], 0);
    alpha[0] = 1;
    nodes.forEach((node, i) => {
      const p = this.nodePositions[i];
      pos.set([p.x, p.y, p.z], (i + 1) * 3);
      size[i + 1] = 0.9 + node.weight * 1.1;
      color.set(node.color, (i + 1) * 3);
      alpha[i + 1] = 1;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    g.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
    this.nodeGlow = new THREE.Points(
      g,
      new THREE.ShaderMaterial({
        vertexShader: glowVertex,
        fragmentShader: glowFragment,
        uniforms: { uPx: { value: 1 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    this.spin.add(this.nodeGlow);

    // faint guide curves
    this.nodePositions.forEach((p) => {
      const mid = p.clone().multiplyScalar(0.5).add(new THREE.Vector3(0, p.length() * 0.18, 0));
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(), mid, p);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(48)),
        new THREE.LineBasicMaterial({ color: 0xa9b8bf, transparent: true, opacity: 0.09, depthWrite: false })
      );
      this.links.push(line);
      this.spin.add(line);
    });

    // agents
    const total = this.small ? 5000 : 14000;
    const wsum = nodes.reduce((s, x) => s + 0.25 + x.weight, 0);
    const aTarget = new Float32Array(total * 3);
    const aLane = new Float32Array(total * 3);
    const aSeed = new Float32Array(total);
    const aSpeed = new Float32Array(total);
    const aBack = new Float32Array(total);
    const aNode = new Float32Array(total);
    const dummy = new Float32Array(total * 3);
    let k = 0;
    nodes.forEach((node, i) => {
      const share = Math.round((total * (0.25 + node.weight)) / wsum);
      const p = this.nodePositions[i];
      for (let j = 0; j < share && k < total; j++, k++) {
        aTarget.set([p.x, p.y, p.z], k * 3);
        const spread = 0.25 + Math.pow(Math.random(), 1.5) * 1.6;
        aLane.set(
          [(Math.random() - 0.5) * spread * 2, (Math.random() - 0.5) * spread * 1.4, (Math.random() - 0.5) * spread * 2],
          k * 3
        );
        aSeed[k] = Math.random();
        aSpeed[k] = 0.05 + Math.random() * 0.09;
        aBack[k] = Math.random() < 0.5 ? 1 : 0;
        aNode[k] = i;
      }
    });
    const ag = new THREE.BufferGeometry();
    ag.setAttribute('position', new THREE.BufferAttribute(dummy.subarray(0, k * 3), 3));
    ag.setAttribute('aTarget', new THREE.BufferAttribute(aTarget.subarray(0, k * 3), 3));
    ag.setAttribute('aLane', new THREE.BufferAttribute(aLane.subarray(0, k * 3), 3));
    ag.setAttribute('aSeed', new THREE.BufferAttribute(aSeed.subarray(0, k), 1));
    ag.setAttribute('aSpeed', new THREE.BufferAttribute(aSpeed.subarray(0, k), 1));
    ag.setAttribute('aBack', new THREE.BufferAttribute(aBack.subarray(0, k), 1));
    ag.setAttribute('aNode', new THREE.BufferAttribute(aNode.subarray(0, k), 1));
    ag.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 20);
    this.agents = new THREE.Points(
      ag,
      new THREE.ShaderMaterial({
        vertexShader: agentVertex,
        fragmentShader: agentFragment,
        uniforms: {
          uTime: { value: 0 },
          uPx: { value: 1 },
          uFocus: { value: -1 },
          uOut: { value: SODIUM },
          uBack: { value: AURORA },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    this.spin.add(this.agents);

    // background dust
    const dn = this.small ? 500 : 1400;
    const dp = new Float32Array(dn * 3);
    for (let i = 0; i < dn; i++) {
      const r = 14 + Math.random() * 20;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      dp.set([r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph) * 0.6, r * Math.sin(ph) * Math.sin(th)], i * 3);
    }
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(dp, 3));
    this.dust = new THREE.Points(
      dg,
      new THREE.PointsMaterial({ color: 0xa9b8bf, size: 0.06, transparent: true, opacity: 0.45, depthWrite: false })
    );
    this.root.add(this.dust);
  }

  setFocus(i: number) {
    this.focus = i;
    (this.agents.material as THREE.ShaderMaterial).uniforms.uFocus.value = i;
    const alpha = this.nodeGlow.geometry.getAttribute('aAlpha') as THREE.BufferAttribute;
    for (let j = 0; j < this.opts.nodes.length; j++) {
      alpha.setX(j + 1, i < 0 || i === j ? 1 : 0.3);
    }
    alpha.needsUpdate = true;
    this.links.forEach((l, j) => {
      (l.material as THREE.LineBasicMaterial).opacity = i === j ? 0.35 : i < 0 ? 0.09 : 0.04;
    });
    if (!this.running) this.render();
  }

  private resize() {
    const r = this.container.getBoundingClientRect();
    this.width = Math.max(1, r.width);
    this.height = Math.max(1, r.height);
    this.renderer.setSize(this.width, this.height, false);
    this.camera.aspect = this.width / this.height;
    // keep the ring in frame on narrow screens; on wide screens move it right of the text
    const wide = this.width >= 1024;
    this.camera.position.z = this.camera.aspect < 0.6 ? 33 : this.camera.aspect < 0.8 ? 27 : this.camera.aspect < 1.2 ? 19 : 16;
    this.root.position.x = wide ? 2.4 : 0;
    this.root.position.y = wide ? 0 : this.camera.aspect < 0.8 ? -3.6 : -1.2;
    this.camera.updateProjectionMatrix();
    const px = (this.renderer.getPixelRatio() * (this.height / 2)) / Math.tan((this.camera.fov * Math.PI) / 360);
    (this.nodeGlow.material as THREE.ShaderMaterial).uniforms.uPx.value = px;
    (this.agents.material as THREE.ShaderMaterial).uniforms.uPx.value = px;
    if (!this.running) this.render();
  }

  private onVis = () => {
    if (!document.hidden) this.start();
  };

  private onDown = (e: PointerEvent) => {
    this.dragging = true;
    this.lastX = this.downX = e.clientX;
    this.lastY = this.downY = e.clientY;
    this.vYaw = 0;
  };
  private onMove = (e: PointerEvent) => {
    if (this.dragging) {
      const dx = e.clientX - this.lastX;
      const dy = e.clientY - this.lastY;
      this.lastX = e.clientX;
      this.lastY = e.clientY;
      this.vYaw = dx * 0.005;
      this.yaw += this.vYaw;
      if (e.pointerType === 'mouse') this.pitch = Math.max(-0.35, Math.min(0.35, this.pitch + dy * 0.003));
      if (!this.running) this.render();
      return;
    }
    // hover: nearest node on screen
    const rect = this.container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
    const hit = this.pick(x, y);
    if (hit !== this.hover) {
      this.hover = hit;
      this.renderer.domElement.style.cursor = hit >= 0 ? 'pointer' : 'grab';
      this.opts.onHover(hit >= 0 ? hit : null);
    }
  };
  private onUp = (e: PointerEvent) => {
    if (!this.dragging) return;
    this.dragging = false;
    const moved = Math.hypot(e.clientX - this.downX, e.clientY - this.downY);
    if (moved < 6) {
      const rect = this.container.getBoundingClientRect();
      const hit = this.pick(e.clientX - rect.left, e.clientY - rect.top);
      if (hit >= 0) this.opts.onSelect(hit);
    }
  };
  private onLeave = () => {
    if (this.hover !== -1) {
      this.hover = -1;
      this.opts.onHover(null);
    }
  };

  private screenPos(i: number) {
    this.tmp.copy(this.nodePositions[i]);
    this.spin.localToWorld(this.tmp);
    const depth = this.tmp.clone().applyMatrix4(this.camera.matrixWorldInverse).z;
    this.tmp.project(this.camera);
    return {
      x: (this.tmp.x * 0.5 + 0.5) * this.width,
      y: (-this.tmp.y * 0.5 + 0.5) * this.height,
      depth,
    };
  }

  private pick(x: number, y: number) {
    let best = -1;
    let bestD = this.small ? 34 : 44;
    for (let i = 0; i < this.nodePositions.length; i++) {
      const s = this.screenPos(i);
      const d = Math.hypot(s.x - x, s.y - y);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return best;
  }

  private start() {
    if (this.running || !this.visible || document.hidden) return;
    this.running = true;
    this.clock.getDelta();
    const tick = () => {
      if (!this.visible || document.hidden) {
        this.running = false;
        return;
      }
      this.step(Math.min(this.clock.getDelta(), 0.05));
      this.render();
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  private step(dt: number) {
    const rm = this.opts.reducedMotion;
    if (!rm) this.time += dt;
    if (!this.dragging) {
      this.vYaw *= 0.94;
      this.yaw += this.vYaw;
      if (!rm && this.focus < 0) this.yaw += dt * 0.06;
    }
    this.pitch *= this.dragging ? 1 : 0.98;
    this.spin.rotation.y = this.yaw;
    this.root.rotation.x = 0.5 + this.pitch;
    this.dust.rotation.y = this.yaw * 0.3 + this.time * 0.005;
    (this.agents.material as THREE.ShaderMaterial).uniforms.uTime.value = this.time;
  }

  private render() {
    this.renderer.render(this.scene, this.camera);
    this.placeLabels();
  }

  private placeLabels() {
    const core = this.opts.coreLabel?.();
    if (core) {
      this.tmp.set(0, 0, 0);
      this.spin.localToWorld(this.tmp);
      this.tmp.project(this.camera);
      const x = (this.tmp.x * 0.5 + 0.5) * this.width;
      const y = (-this.tmp.y * 0.5 + 0.5) * this.height;
      core.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, 30px)`;
    }
    const els = this.opts.labels();
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!el) continue;
      const s = this.screenPos(i);
      // nodes further back fade a little
      const back = Math.min(1, Math.max(0, (-s.depth - 12) / 10));
      const half = el.offsetWidth / 2 + 6;
      const x = Math.min(this.width - half, Math.max(half, s.x));
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0) translate(-50%, 18px)`;
      el.style.opacity = String(1 - back * 0.55);
      el.style.zIndex = String(100 - Math.round(back * 50));
    }
  }

  destroy() {
    cancelAnimationFrame(this.raf);
    this.running = false;
    this.ro.disconnect();
    this.io.disconnect();
    document.removeEventListener('visibilitychange', this.onVis);
    window.removeEventListener('pointermove', this.onMove);
    window.removeEventListener('pointerup', this.onUp);
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('pointerdown', this.onDown);
    canvas.removeEventListener('pointerleave', this.onLeave);
    this.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material | undefined;
      mat?.dispose();
    });
    this.renderer.dispose();
    canvas.remove();
  }
}
