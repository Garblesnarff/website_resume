import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SkyCanvas, { SkyState } from './SkyCanvas';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const day = [
  {
    when: 'Morning drive',
    what: 'AI podcasts on the drive to daycare drop-off.',
  },
  {
    when: 'Factory shift',
    what: 'Eight hours on a forklift, with AI research podcasts the whole time. Sixteen years of shifts like this one.',
  },
  {
    when: 'After the family sleeps',
    what: 'The real work starts. I direct agent teams: I set the direction, design the evals and make the judgment calls.',
  },
  {
    when: 'Shipped',
    what: 'Infinite Realms is live, with Stripe payments. An AI Dungeon Master for solo tabletop RPGs.',
  },
];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Scroll-driven story: one working day over a lake, ending in the aurora. */
const Hero = () => {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sky = useRef<SkyState>({ phase: 0, aurora: 0 });
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (reduced) {
      sky.current = { phase: 3, aurora: 1 };
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = clamp(-r.top / Math.max(1, total));
      // 0..0.1 intro, then four steps
      const s = clamp((p - 0.1) / 0.84, 0, 0.9999) * 4;
      const intro = clamp(p / 0.1);
      sky.current.phase = p < 0.1 ? 0 : clamp(s - 0.5, 0, 3);
      sky.current.aurora = clamp((s - 2.6) / 0.8);
      stageRef.current?.style.setProperty('--intro', intro.toFixed(3));
      stageRef.current?.style.setProperty('--p', p.toFixed(4));
      setStep(p < 0.1 ? -1 : Math.floor(s));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduced]);

  const intro = (
    <>
      <p className="meta text-fog">Rob Hanson, rural Wisconsin</p>
      <h1 className="mt-4 font-display text-[clamp(3.5rem,min(13vw,15vh),8.5rem)] font-extrabold uppercase leading-[0.86] text-birch [text-shadow:0_2px_40px_rgb(var(--night)/0.6)]">
        <span className="block">Builder</span>
        <span className="block">directing</span>
        <span className="block">AI agent</span>
        <span className="block">teams</span>
      </h1>
      <p className="mt-7 max-w-lg text-lg leading-relaxed text-birch/80 md:text-xl">
        16 years in a warehouse, HSED, shipping real systems with Claude, Gemini and other models since 2024.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#fleet" onClick={jumpTo('fleet')} className="btn btn-solid">
          See the work
        </a>
        <Link to="/about" className="btn btn-quiet bg-night/30 backdrop-blur-sm">
          Read my story
        </Link>
      </div>
    </>
  );

  if (reduced) {
    return (
      <section id="story" className="relative bg-night text-birch">
        <div className="relative h-[100svh] min-h-[38rem] overflow-hidden">
          <div className="absolute inset-0">
            <SkyCanvas stateRef={sky} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/30 to-transparent" />
          <div className="wrap relative flex h-full flex-col justify-center pt-16">{intro}</div>
        </div>
        <ol className="wrap grid gap-10 py-20 md:grid-cols-4">
          {day.map((d) => (
            <li key={d.when}>
              <h2 className="text-4xl text-birch">{d.when}</h2>
              <p className="mt-3 text-fog">{d.what}</p>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section id="story" ref={sectionRef} aria-label="A working day" className="relative h-[460vh] bg-night text-birch">
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] overflow-hidden"
        style={{ ['--intro' as string]: 0, ['--p' as string]: 0 }}
      >
        <div className="absolute inset-0">
          <SkyCanvas stateRef={sky} />
        </div>

        {/* Scrim so the type stays readable over the sky */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night/75 via-night/25 to-transparent"
          style={{ opacity: 'calc(1 - var(--intro) * 0.45)' }}
        />

        {/* Intro: the headline lifts away as the day begins */}
        <div
          className="wrap absolute inset-x-0 top-0 flex h-full flex-col justify-center pb-[14vh] pt-24"
          style={{
            opacity: 'calc(1 - var(--intro))',
            transform: 'translate3d(0, calc(var(--intro) * -14vh), 0) scale(calc(1 - var(--intro) * 0.06))',
            transformOrigin: 'left center',
            pointerEvents: step === -1 ? 'auto' : 'none',
          }}
        >
          {intro}
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-ui text-sm font-bold tracking-wide text-fog"
          style={{ opacity: 'calc(1 - var(--intro) * 3)' }}
        >
          Scroll to start the day
          <span className="relative block h-10 w-px overflow-hidden bg-fog/25">
            <span className="absolute inset-x-0 top-0 h-4 animate-[cue_1.8s_ease-in-out_infinite] bg-sodium" />
          </span>
        </div>

        {/* The day, one step at a time */}
        <div className="wrap absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end pb-[14vh] md:pb-[12vh]">
          <div className="relative min-h-[15rem] max-w-2xl">
            {day.map((d, i) => {
              const active = i === step;
              const last = i === day.length - 1;
              return (
                <div
                  key={d.when}
                  aria-hidden={!active}
                  className="absolute inset-x-0 bottom-0 transition-[opacity,transform,filter] duration-700 ease-out"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? 'none' : i < step ? 'translateY(-2.5rem)' : 'translateY(2.5rem)',
                    filter: active ? 'none' : 'blur(6px)',
                    pointerEvents: active ? 'auto' : 'none',
                  }}
                >
                  <p className="meta text-fog">
                    {i + 1} of {day.length}
                  </p>
                  <h2
                    className={`mt-2 font-display text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold uppercase leading-[0.86] [text-shadow:0_2px_40px_rgb(var(--night)/0.7)] ${
                      last ? 'text-sodium' : 'text-birch'
                    }`}
                  >
                    {d.when}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-birch/85 md:text-xl">{d.what}</p>
                  {last && (
                    <div className="mt-7 flex flex-wrap gap-4">
                      <a href="https://infiniterealms.app" target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                        Visit infiniterealms.app
                      </a>
                      <a href="#fleet" onClick={jumpTo('fleet')} className="btn btn-quiet bg-night/30 backdrop-blur-sm">
                        See all the work
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Day rail */}
        <ol
          aria-hidden="true"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-5 sm:flex md:right-10"
          style={{ opacity: 'var(--intro)' }}
        >
          {day.map((d, i) => (
            <li key={d.when} className="flex items-center justify-end gap-3">
              <span
                className={`font-ui text-sm font-bold transition-colors duration-500 ${
                  i === step ? 'text-birch' : 'text-fog/50'
                } hidden lg:inline`}
              >
                {d.when}
              </span>
              <span
                className={`block h-[2px] transition-all duration-500 ${
                  i === step ? 'w-10 bg-sodium' : i < step ? 'w-5 bg-fog/70' : 'w-5 bg-fog/25'
                }`}
              />
            </li>
          ))}
        </ol>

        {/* Bottom fade into the next section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-night"
          style={{ opacity: 'clamp(0, calc((var(--p) - 0.9) * 10), 1)' }}
        />
      </div>
    </section>
  );
};

function jumpTo(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
}

export default Hero;
