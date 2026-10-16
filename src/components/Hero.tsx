import { Link } from 'react-router-dom';

const day = [
  {
    when: 'Morning drive',
    what: 'AI podcasts on the drive to daycare drop-off.',
  },
  {
    when: 'Factory shift',
    what: 'Eight hours on a forklift, with AI research podcasts the whole time.',
  },
  {
    when: 'After the family sleeps',
    what: 'I direct agent teams. I set the direction, design the evals and make the judgment calls.',
  },
  {
    when: 'Shipped',
    what: (
      <>
        Infinite Realms is live at{' '}
        <a href="https://infiniterealms.app" target="_blank" rel="noopener noreferrer" className="text-link">
          infiniterealms.app
        </a>
        , with Stripe payments.
      </>
    ),
  },
];

const headline = ['Builder', 'directing', 'AI agent', 'teams'];

const Hero = () => {
  return (
    <section className="relative on-night grain overflow-hidden bg-night text-birch">
      <div className="wrap grid gap-16 pb-24 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pb-28 lg:pt-16">
        <div className="lg:col-span-7">
          <p className="meta rise text-fog">Rob Hanson, rural Wisconsin</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,21vw,8.75rem)] font-extrabold uppercase leading-[0.88] tracking-[0.005em] text-birch">
            {headline.map((line, i) => (
              <span key={line} className="rise block" style={{ animationDelay: `${120 + i * 90}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="rise mt-9 max-w-xl text-xl leading-relaxed text-fog md:text-[1.35rem]" style={{ animationDelay: '520ms' }}>
            16 years in a warehouse, HSED, shipping real systems with Claude, Gemini and other models since 2024.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '620ms' }}>
            <Link to="/projects" className="btn btn-solid">
              See the work
            </Link>
            <Link to="/about" className="btn btn-quiet">
              Read my story
            </Link>
          </div>
        </div>

        <aside aria-labelledby="day-title" className="lg:col-span-5 lg:pl-8 lg:pt-3">
          <h2 id="day-title" className="meta pop font-ui text-lg font-bold text-fog" style={{ animationDelay: '300ms' }}>
            A working day
          </h2>
          <ol className="relative mt-8">
            <span aria-hidden="true" className="draw absolute bottom-3 left-[7px] top-3 w-[2px] bg-gradient-to-b from-night-line via-sodium/60 to-sodium" />
            {day.map((stop, i) => {
              const last = i === day.length - 1;
              return (
                <li
                  key={stop.when}
                  className="pop relative pb-9 pl-10 last:pb-0"
                  style={{ animationDelay: `${420 + i * 170}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[0.4rem] h-4 w-4 rounded-full border-2 ${
                      last ? 'border-sodium bg-sodium shadow-[0_0_0_6px_rgb(var(--sodium)/0.18)]' : 'border-fog/70 bg-night'
                    }`}
                  />
                  <h3 className={`font-display text-[1.9rem] font-bold leading-none ${last ? 'text-sodium' : 'text-birch'}`}>
                    {stop.when}
                  </h3>
                  <p className="mt-2 max-w-sm text-[1.02rem] leading-snug text-fog">{stop.what}</p>
                </li>
              );
            })}
          </ol>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
