import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { isPlaceholder, toUrl } from '../config';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { FleetNode, FleetScene } from '../gl/fleetScene';

interface NodeInfo extends FleetNode {
  label: string;
  title: string;
  goal: string;
  outcome: string;
  to: string;
  live?: string;
}

const short: Record<string, string> = {
  'infinite-realms': 'Infinite Realms',
  'tibetan-translation': 'Tibetan Translation',
  'mcp-servers': 'MCP Servers',
  'story-automation': 'Story Automation',
  'recipe-scraper': 'KitchenSync',
  'api-key-wallet': 'KeyGuardian',
  'astral-audio': 'Astral Audio',
  'imagine-ink': 'Imagine Ink',
};
const weight: Record<string, number> = {
  'infinite-realms': 1,
  'tibetan-translation': 0.75,
  'mcp-servers': 0.5,
  'story-automation': 0.4,
  'recipe-scraper': 0.35,
  'api-key-wallet': 0.3,
  'astral-audio': 0.4,
  'imagine-ink': 0.55,
};

const hex = (h: string): [number, number, number] => {
  const n = parseInt(h.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};

const AgentFleet = () => {
  const reduced = usePrefersReducedMotion();
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const coreRef = useRef<HTMLSpanElement>(null);
  const sceneRef = useRef<FleetScene | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const activeRef = useRef<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'ready' | 'failed'>('idle');

  const nodes: NodeInfo[] = useMemo(() => {
    const list: NodeInfo[] = projects.map((p) => ({
      id: p.id,
      label: short[p.id] ?? p.title,
      title: p.title,
      goal: p.goal,
      outcome: p.outcome,
      to: `/projects/${p.id}`,
      live: p.links?.preview && !isPlaceholder(p.links.preview) ? toUrl(p.links.preview) : undefined,
      weight: weight[p.id] ?? 0.4,
      color: hex(p.id === 'infinite-realms' ? '#F0A43A' : '#CFE9DF'),
    }));
    list.push({
      id: 'aurora',
      label: 'Aurora Project',
      title: 'The Aurora Project',
      goal: 'Observing emergent intelligence. A Claude instance named itself "Aurora" and built mathematical models of its own consciousness.',
      outcome: 'A full, annotated transcript with every tool call and the images Aurora generated of its own internal state.',
      to: '/projects#aurora-exploration',
      weight: 0.65,
      color: hex('#B49CFF'),
    });
    return list;
  }, []);

  const setFocus = (i: number | null) => {
    activeRef.current = i;
    setActive(i);
    sceneRef.current?.setFocus(i ?? -1);
  };

  // Load three.js only when the section comes near the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let cancelled = false;
    const io = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || sceneRef.current) return;
        io.disconnect();
        try {
          const { FleetScene } = await import('../gl/fleetScene');
          if (cancelled || !stageRef.current) return;
          sceneRef.current = new FleetScene(stageRef.current, {
            nodes,
            labels: () => labelRefs.current,
            coreLabel: () => coreRef.current,
            reducedMotion: reduced,
            onHover: (i) => setFocus(i),
            onSelect: (i) => {
              if (activeRef.current === i) navigate(nodes[i].to);
              else setFocus(i);
            },
          });
          setStatus('ready');
        } catch {
          setStatus('failed');
        }
      },
      { rootMargin: '100% 0px' }
    );
    io.observe(section);
    return () => {
      cancelled = true;
      io.disconnect();
      sceneRef.current?.destroy();
      sceneRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const info = active !== null ? nodes[active] : null;

  return (
    <section ref={sectionRef} id="fleet" aria-labelledby="fleet-title" className="relative scroll-mt-0 bg-night text-birch">
      <div className="relative h-[100svh] min-h-[44rem] overflow-hidden">
        {/* soft radial light behind the fleet */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_65%_50%,rgb(var(--night-raised))_0%,rgb(var(--night))_70%)]"
        />
        <div ref={stageRef} className={`absolute inset-0 ${status === 'failed' ? 'hidden' : ''}`} />

        {/* Labels, positioned by the scene every frame */}
        {status === 'ready' && (
          <div className="pointer-events-none absolute inset-0">
            <span
              ref={coreRef}
              aria-hidden="true"
              className="absolute left-0 top-0 whitespace-nowrap font-display text-2xl font-extrabold uppercase tracking-wide text-sodium [text-shadow:0_0_18px_rgb(var(--night))]"
            >
              Rob
            </span>
            {nodes.map((n, i) => (
              <button
                key={n.id}
                ref={(el) => (labelRefs.current[i] = el)}
                type="button"
                className={`pointer-events-auto absolute left-0 top-0 whitespace-nowrap rounded-[3px] px-2 py-0.5 font-ui text-[0.8rem] font-bold tracking-wide transition-colors sm:text-[0.95rem] ${
                  active === i ? 'bg-birch text-night' : 'text-birch/80 hover:text-birch'
                }`}
                onMouseEnter={() => setFocus(i)}
                onMouseLeave={() => setFocus(null)}
                onFocus={() => setFocus(i)}
                onBlur={() => setFocus(null)}
                onClick={() => navigate(n.to)}
              >
                {n.label}
              </button>
            ))}
          </div>
        )}

        {/* Copy */}
        <div className="wrap pointer-events-none relative flex h-full flex-col justify-between py-20 md:py-24">
          <div className="max-w-md">
            <h2 id="fleet-title" className="text-[clamp(3rem,6.5vw,5.75rem)] uppercase leading-[0.86] text-birch">
              One director.
              <br />
              Many agents.
            </h2>
            <p className="mt-5 text-lg text-fog">
              Each light is an agent working a task. Amber goes out as direction. Green comes back as work. Pick a
              project to see what shipped.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-ui text-[0.95rem] font-bold text-fog">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sodium shadow-[0_0_10px_rgb(var(--sodium))]" />
                Direction
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#5FE3A1] shadow-[0_0_10px_#5FE3A1]" />
                Work coming back
              </li>
              {status === 'ready' && <li className="hidden md:block">Drag to turn</li>}
            </ul>
          </div>

          <div aria-live="polite" className="pointer-events-auto max-w-md">
            {info ? (
              <div className="rounded-[4px] border border-night-line bg-night/80 p-6 backdrop-blur-md">
                <h3 className="text-4xl text-birch">{info.title}</h3>
                <p className="mt-3 text-birch/85">{info.goal}</p>
                <p className="mt-2 line-clamp-3 text-[0.95rem] text-fog">{info.outcome}</p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-ui text-lg font-bold">
                  <Link to={info.to} className="text-sodium underline-offset-4 hover:underline">
                    {info.id === 'aurora' ? 'Read the transcript' : 'Project details'}
                  </Link>
                  {info.live && (
                    <a href={info.live} target="_blank" rel="noopener noreferrer" className="text-fog underline-offset-4 hover:text-birch hover:underline">
                      Live site
                    </a>
                  )}
                </div>
              </div>
            ) : (
              status !== 'failed' && (
                <p className="font-ui text-lg font-bold text-fog/80">
                  {nodes.length - 1} projects and one research log. Hover or tap a light.
                </p>
              )
            )}

            {status === 'failed' && (
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {nodes.map((n) => (
                  <li key={n.id}>
                    <Link to={n.to} className="font-display text-2xl font-bold text-birch hover:text-sodium">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentFleet;
