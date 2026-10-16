/**
 * "One night on the lake": a full-screen fragment shader.
 * Sky that moves through four phases of a working day, stars, an aurora,
 * a far shore with a lit plant, a spruce treeline, a cabin whose window
 * lights up at night, and a lake that reflects all of it.
 *
 * Phase:  0 pre-dawn drive   1 factory glow   2 night at home   3 aurora
 */
export const lakeVertex = /* glsl */ `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export const lakeFragment = /* glsl */ `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform float uPhase;     // 0..3
uniform float uAurora;    // 0..1 aurora strength
uniform vec2  uMouse;     // -1..1
uniform float uHorizon;   // horizon height in screen units (y in -0.5..0.5)
uniform float uCabinX;
uniform float uPlantX;
uniform float uQuiet;     // 1 = header mode: no foreground, softer

// ---------- noise ----------
float hash1(float n) { return fract(sin(n * 127.1) * 43758.5453123); }
float hash2(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash2(i);
  float b = hash2(i + vec2(1.0, 0.0));
  float c = hash2(i + vec2(0.0, 1.0));
  float d = hash2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return v;
}

// ---------- phase helpers ----------
float ph(float k) { return clamp(uPhase - k, 0.0, 1.0); }
vec3 byPhase(vec3 a, vec3 b, vec3 c, vec3 d) {
  vec3 col = mix(a, b, smoothstep(0.0, 1.0, ph(0.0)));
  col = mix(col, c, smoothstep(0.0, 1.0, ph(1.0)));
  col = mix(col, d, smoothstep(0.0, 1.0, ph(2.0)));
  return col;
}
float byPhaseF(float a, float b, float c, float d) {
  float v = mix(a, b, smoothstep(0.0, 1.0, ph(0.0)));
  v = mix(v, c, smoothstep(0.0, 1.0, ph(1.0)));
  v = mix(v, d, smoothstep(0.0, 1.0, ph(2.0)));
  return v;
}

// ---------- aurora ----------
vec3 aurora(vec2 p, float t) {
  vec3 col = vec3(0.0);
  float H = uHorizon;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    float x = p.x * (1.0 + fk * 0.45) + fk * 1.7 + uMouse.x * 0.01;
    float fold = fbm(vec2(x * 0.9 + t * 0.035, fk * 3.1 + t * 0.01));
    float base = H + 0.13 + fk * 0.055 + (fold - 0.5) * 0.24 + 0.025 * sin(x * 1.4 + t * 0.13 + fk);
    float d = p.y - base;
    float lower = smoothstep(-0.004, 0.007, d);
    float upper = exp(-max(d, 0.0) * (3.6 + fk * 2.0));
    float xr = x + fold * 0.7;
    float rays = vnoise(vec2(xr * 26.0, t * 0.2 + fk * 10.0)) * 0.6 + vnoise(vec2(xr * 95.0, t * 0.33 + fk * 4.0)) * 0.4;
    rays = 0.12 + 1.6 * pow(rays, 2.4);
    float band = smoothstep(0.22, 0.62, fbm(vec2(x * 0.55 - t * 0.025, 7.0 + fk)));
    float flick = 0.86 + 0.14 * sin(t * 1.7 + x * 7.0 + fk * 2.3);
    float edge = exp(-max(d, 0.0) * 75.0) * lower * 1.1;
    float I = (lower * upper * rays + edge) * band * flick * (1.0 - fk * 0.22);
    vec3 green = vec3(0.22, 1.0, 0.6);
    vec3 teal  = vec3(0.15, 0.75, 0.85);
    vec3 violet = vec3(0.55, 0.32, 0.95);
    vec3 c = mix(green, teal, smoothstep(0.0, 0.08, d) * 0.35);
    c = mix(c, violet, smoothstep(0.06, 0.32, d));
    col += c * I;
  }
  return col * 0.85;
}

// ---------- silhouettes ----------
float trees(float x, float density, float minH, float maxH, float seed) {
  float u = x * density;
  float i = floor(u);
  float top = 0.0;
  for (int k = -1; k <= 1; k++) {
    float c = i + float(k);
    float cluster = 0.45 + 0.75 * vnoise(vec2(c * 0.13 + seed, seed));
    float h = mix(minH, maxH, pow(hash1(c * 1.7 + seed), 1.2)) * cluster;
    float cx = c + 0.5 + (hash1(c * 3.1 + seed) - 0.5) * 0.8;
    float dx = abs(u - cx) / density;
    float w = h * (0.26 + 0.12 * hash1(c * 5.3 + seed));
    float tt = 1.0 - dx / w;
    float tiers = 5.0 + floor(hash1(c * 7.7 + seed) * 4.0);
    float prof = h * tt - h * 0.09 * fract(tt * tiers);   // tiered spruce edge
    top = max(top, prof);
  }
  return top;
}

float clearing(float x, float cx, float r) {
  return smoothstep(r, r * 2.2, abs(x - cx));
}

// Returns colour of everything at/above the waterline at point p.
// reflected = 1 when called for the lake mirror.
vec3 above(vec2 p, float t, float reflected) {
  float H = uHorizon;
  float y = p.y - H;

  // sky gradient
  vec3 zen = byPhase(vec3(0.035, 0.07, 0.11), vec3(0.04, 0.055, 0.075), vec3(0.012, 0.024, 0.04), vec3(0.01, 0.022, 0.036));
  vec3 hor = byPhase(vec3(0.24, 0.30, 0.44), vec3(0.34, 0.22, 0.11), vec3(0.05, 0.085, 0.115), vec3(0.04, 0.1, 0.11));
  float g = exp(-max(y, 0.0) * 5.5);
  vec3 col = mix(zen, hor, g);

  // pre-dawn warmth low on the horizon
  col += vec3(0.55, 0.26, 0.16) * exp(-max(y, 0.0) * 22.0) * (1.0 - smoothstep(0.0, 1.0, ph(0.0))) * 0.6;

  // sodium light dome over the plant
  float plantGlow = byPhaseF(0.45, 1.0, 0.35, 0.28);
  float dxp = p.x - uPlantX;
  col += vec3(0.95, 0.55, 0.18) * exp(-dxp * dxp * 18.0) * exp(-max(y, 0.0) * 9.0) * 0.16 * plantGlow;

  // stars
  float starVis = byPhaseF(0.45, 0.12, 1.0, 1.0) * (1.0 - reflected * 0.6);
  vec2 sp = p * 140.0;
  vec2 cell = floor(sp);
  float sh = hash2(cell);
  if (sh > 0.965) {
    vec2 sc = cell + 0.5 + (vec2(hash2(cell + 3.1), hash2(cell + 7.7)) - 0.5) * 0.6;
    float sd = length(sp - sc);
    float tw = 0.6 + 0.4 * sin(t * (1.0 + sh * 3.0) + sh * 50.0);
    float s = smoothstep(1.1, 0.0, sd) * tw * (sh - 0.965) * 28.0;
    col += vec3(0.85, 0.9, 1.0) * s * starVis * smoothstep(0.0, 0.06, y);
  }

  // aurora + its light on the low sky
  float aI = uAurora;
  if (aI > 0.001) {
    vec3 a = aurora(p, t) * aI;
    col += a * (1.0 - reflected * 0.25);
    col += vec3(0.04, 0.16, 0.11) * aI * exp(-max(y, 0.0) * 4.0);
  }

  // shooting star, night only
  float ss = smoothstep(1.6, 2.2, uPhase) * (1.0 - uQuiet);
  float period = 9.0;
  float tc = mod(t, period);
  float idx = floor(t / period);
  if (ss > 0.0 && tc < 0.9) {
    vec2 s0 = vec2(hash1(idx) * 0.8 - 0.4, H + 0.32 + hash1(idx + 4.0) * 0.12);
    vec2 dir = normalize(vec2(-0.8, -0.35));
    vec2 head = s0 + dir * tc * 0.5;
    vec2 rel = p - head;
    float along = dot(rel, -dir);
    float across = abs(dot(rel, vec2(-dir.y, dir.x)));
    float trail = smoothstep(0.12, 0.0, along) * step(0.0, along) * smoothstep(0.0025, 0.0, across);
    col += vec3(0.9, 0.95, 1.0) * trail * (1.0 - tc / 0.9) * ss * 1.4;
  }

  // ---- far shore: plant + far trees ----
  float px = p.x + uMouse.x * 0.008;
  vec3 farCol = mix(hor, zen, 0.25) * 0.55 + vec3(0.004, 0.006, 0.008);

  // the plant: low block and two stacks
  float pdx = px - uPlantX;
  float block = step(abs(pdx), 0.07) * step(y, 0.013);
  float stack1 = step(abs(pdx - 0.03), 0.0035) * step(y, 0.042);
  float stack2 = step(abs(pdx + 0.015), 0.003) * step(y, 0.032);
  float plant = max(block, max(stack1, stack2)) * step(0.0, y + 0.001);
  col = mix(col, farCol * 0.8, plant);

  // plant lights
  float lightOn = byPhaseF(0.75, 1.0, 0.55, 0.45);
  for (int i = 0; i < 7; i++) {
    float fi = float(i);
    vec2 lp = vec2(uPlantX + (hash1(fi + 1.0) - 0.5) * 0.13, H + 0.003 + hash1(fi + 9.0) * 0.009);
    lp.x -= uMouse.x * 0.008;
    float dl = length((p - lp) * vec2(1.0, 1.0));
    col += vec3(1.0, 0.68, 0.28) * (exp(-dl * dl * 2.2e5) * 1.8 + exp(-dl * 110.0) * 0.08) * lightOn;
  }
  // stack beacon
  vec2 bp = vec2(uPlantX + 0.03 - uMouse.x * 0.008, H + 0.044);
  float blink = step(0.5, fract(t * 0.5));
  col += vec3(1.0, 0.2, 0.15) * exp(-pow(length(p - bp), 2.0) * 2.0e5) * blink * 1.6 * lightOn;

  float farTop = trees(px, 70.0, 0.004, 0.016, 11.0) + 0.002 * vnoise(vec2(px * 30.0, 1.0));
  float farMask = smoothstep(farTop + 0.0012, farTop, y);
  col = mix(col, farCol, farMask);

  // mist on the water line
  col = mix(col, hor * 0.8, exp(-abs(y) * 70.0) * 0.18);

  if (uQuiet > 0.5) return col;

  // ---- near shore: treeline with a clearing for the cabin ----
  float nx = p.x + uMouse.x * 0.025;
  float clear = clearing(nx, uCabinX, 0.04);
  float nearTop = max(trees(nx, 46.0, 0.02, 0.095, 3.0), trees(nx + 0.013, 61.0, 0.012, 0.05, 8.0)) * clear + 0.007 + 0.006 * vnoise(vec2(nx * 14.0, 2.0));
  vec3 nearCol = vec3(0.006, 0.012, 0.016) + hor * 0.03;
  float nearMask = smoothstep(nearTop + 0.0015, nearTop, y);
  col = mix(col, nearCol, nearMask);

  // cabin
  float cdx = nx - uCabinX;
  float body = step(abs(cdx), 0.028) * step(y, 0.024);
  float roof = step(y, 0.024 + (0.034 - abs(cdx)) * 0.75) * step(abs(cdx), 0.034) * step(0.02, y);
  float chimney = step(abs(cdx - 0.015), 0.003) * step(y, 0.044);
  float cabin = max(body, max(roof, chimney));
  col = mix(col, nearCol * 0.9, cabin);

  // the window: on after the family sleeps
  float win = smoothstep(1.55, 1.95, uPhase);
  vec2 wp = vec2(cdx + 0.008, y - 0.012);
  float wmask = step(abs(wp.x), 0.006) * step(abs(wp.y), 0.0055);
  vec3 warm = vec3(1.0, 0.72, 0.36);
  col = mix(col, warm * 1.2, wmask * win);
  col += warm * exp(-length(wp) * 70.0) * 0.12 * win * (1.0 - reflected * 0.3);

  return col;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime;
  float H = uHorizon;
  vec3 col;

  if (p.y >= H || uQuiet > 0.5) {
    col = above(p, t, 0.0);
  } else {
    // lake
    float d = H - p.y;
    float persp = 1.0 / (d * 9.0 + 0.25);
    float wave = vnoise(vec2(p.x * 7.0 + t * 0.05, d * 90.0 * persp * 0.18 - t * 0.55));
    float wave2 = vnoise(vec2(p.x * 22.0 - t * 0.1, d * 260.0 * persp * 0.12 + t * 0.4));
    float ripple = ((wave - 0.5) * 0.9 + (wave2 - 0.5) * 0.35) * 0.018 * (0.25 + d * 5.0);
    vec2 m = vec2(p.x + ripple * 1.4, H + d * 1.35 + ripple * 0.4);
    vec3 refl = above(m, t, 1.0);
    vec3 water = vec3(0.006, 0.014, 0.02);
    float fres = 0.5 * exp(-d * 2.2) + 0.1;
    col = mix(water, refl, fres);

    // light streaks from the plant across the water
    float lightOn = byPhaseF(0.75, 1.0, 0.55, 0.45);
    float sx = p.x + ripple * 2.5 - uPlantX + uMouse.x * 0.008;
    float streak = exp(-sx * sx * 500.0) * exp(-d * 5.0) * (0.45 + 0.55 * wave2);
    col += vec3(1.0, 0.62, 0.25) * streak * 0.35 * lightOn;

    // window streak
    float win = smoothstep(1.55, 1.95, uPhase);
    float wx = p.x + ripple * 2.5 - uCabinX - 0.008 + uMouse.x * 0.025;
    col += vec3(1.0, 0.72, 0.36) * exp(-wx * wx * 2500.0) * exp(-d * 9.0) * 0.4 * win * (0.5 + 0.5 * wave);

    // shoreline glint
    col += vec3(0.5, 0.6, 0.65) * exp(-d * 260.0) * 0.05;
  }

  // vignette + grain
  vec2 q = gl_FragCoord.xy / uRes;
  col *= 0.55 + 0.45 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.22);
  col += (hash2(gl_FragCoord.xy + fract(t) * 91.0) - 0.5) * 0.022;

  // gentle filmic curve
  col = col / (1.0 + col * 0.35);
  col = pow(max(col, 0.0), vec3(0.95));

  gl_FragColor = vec4(col, 1.0);
}
`;
