import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

/** Infinite Realms, shown large as the lead project. */
const LeadProject = () => {
  const p = projects.find((x) => x.id === 'infinite-realms');
  if (!p) return null;

  return (
    <article id={p.id} className="grid scroll-mt-24 gap-x-12 gap-y-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="meta flex items-center gap-2 text-spruce">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-spruce" />
          Live product
        </p>
        <h3 className="mt-4 text-[clamp(3.5rem,8vw,6.5rem)] uppercase leading-[0.85] text-ink">
          Infinite
          <br />
          Realms
        </h3>
        <p className="mt-6 max-w-md text-xl leading-relaxed">{p.goal}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://infiniterealms.app" target="_blank" rel="noopener noreferrer" className="btn btn-ink">
            Visit infiniterealms.app
          </a>
          <Link to={`/projects/${p.id}`} className="btn text-spruce ring-1 ring-inset ring-spruce/40 hover:ring-spruce">
            Project details
          </Link>
        </div>
      </div>

      <div className="lg:col-span-7 lg:pt-3">
        <blockquote className="border-l-[3px] border-sodium-deep pl-6 font-serif text-2xl italic leading-snug text-ink md:text-[1.9rem]">
          {p.process}
        </blockquote>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-[4px] bg-birch-line sm:grid-cols-3">
          <div className="bg-birch-shade p-5">
            <dt className="font-display text-5xl font-extrabold text-ink">2,600+</dt>
            <dd className="mt-2 text-[0.98rem] leading-snug text-slate">GitHub issues and PRs</dd>
          </div>
          <div className="bg-birch-shade p-5">
            <dt className="font-display text-5xl font-extrabold text-ink">0.30.x</dt>
            <dd className="mt-2 text-[0.98rem] leading-snug text-slate">Current release line</dd>
          </div>
          <div className="bg-birch-shade p-5">
            <dt className="font-display text-5xl font-extrabold text-ink">Gated</dt>
            <dd className="mt-2 text-[0.98rem] leading-snug text-slate">No campaign ships before it passes the playtest gate</dd>
          </div>
        </dl>

        <p className="mt-6 max-w-measure text-slate">
          The playtest gate runs Monte Carlo combat simulations and walkthroughs from each campaign&rsquo;s text against
          pass thresholds before a campaign ships.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Skills">
          {p.skills.map((s) => (
            <li key={s} className="tag">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default LeadProject;
