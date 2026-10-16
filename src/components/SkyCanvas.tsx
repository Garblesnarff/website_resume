import { useEffect, useRef, useState } from 'react';
import { ShaderCanvas } from '../gl/ShaderCanvas';
import { lakeFragment, lakeVertex } from '../gl/lakeShader';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export interface SkyState {
  /** 0..3, see lakeShader.ts */
  phase: number;
  /** 0..1 */
  aurora: number;
}

interface SkyCanvasProps {
  /** Read every frame. Keep it a ref so scrolling does not re-render React. */
  stateRef?: React.MutableRefObject<SkyState>;
  /** Fixed state when no stateRef is given. */
  phase?: number;
  aurora?: number;
  /** Header mode: sky and far shore only. */
  quiet?: boolean;
  scale?: number;
  className?: string;
}

/** The lake-at-night shader as a React component. Falls back to nothing (the parent's colour shows). */
const SkyCanvas = ({ stateRef, phase = 3, aurora = 1, quiet = false, scale, className = '' }: SkyCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ShaderCanvas.supported()) {
      setFailed(true);
      return;
    }

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    if (!reduced && !quiet) window.addEventListener('pointermove', onMove, { passive: true });

    const smooth = { phase: stateRef?.current.phase ?? phase, aurora: stateRef?.current.aurora ?? aurora };
    let lastT = 0;

    let sc: ShaderCanvas;
    try {
      sc = new ShaderCanvas(canvas, {
        vertex: lakeVertex,
        fragment: lakeFragment,
        scale: scale ?? (quiet ? 0.5 : window.innerWidth < 768 ? 0.6 : 0.75),
        still: reduced,
        onFrame: (t, set) => {
          const target = stateRef?.current ?? { phase, aurora };
          const dt = Math.min(0.25, Math.max(0, t - lastT));
          lastT = t;
          const k = reduced ? 1 : 1 - Math.exp(-dt * 3.5);
          smooth.phase += (target.phase - smooth.phase) * k;
          smooth.aurora += (target.aurora - smooth.aurora) * k;
          const km = 1 - Math.exp(-dt * 2.5);
          mouse.x += (mouse.tx - mouse.x) * km;
          mouse.y += (mouse.ty - mouse.y) * km;

          const w = canvas.clientWidth;
          const h = canvas.clientHeight || 1;
          const aspect = w / h;
          const portrait = aspect < 1;
          set('uPhase', smooth.phase);
          set('uAurora', smooth.aurora);
          set('uMouse', [mouse.x, mouse.y]);
          set('uHorizon', quiet ? -0.42 : portrait ? 0.04 : -0.13);
          set('uCabinX', portrait ? -aspect * 0.18 : aspect * 0.12);
          set('uPlantX', portrait ? aspect * 0.26 : aspect * 0.34);
          set('uQuiet', quiet ? 1 : 0);
        },
      });
      sc.loop();
    } catch {
      setFailed(true);
      window.removeEventListener('pointermove', onMove);
      return;
    }

    return () => {
      window.removeEventListener('pointermove', onMove);
      sc.destroy();
    };
    // stateRef is a stable ref; fixed props only matter on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, quiet]);

  if (failed) return null;
  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
};

export default SkyCanvas;
