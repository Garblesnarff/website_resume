import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AgentFleet from '../components/AgentFleet';
import LeadProject from '../components/LeadProject';
import ProjectRow from '../components/ProjectRow';
import { projects } from '../data/projects';
import { BASE_PATH, CONTACT } from '../config';

const ledgerIds = ['tibetan-translation', 'mcp-servers', 'imagine-ink', 'astral-audio'];

const Home = () => {
  const ledger = ledgerIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      <Hero />
      <AgentFleet />

      {/* Selected work */}
      <section aria-labelledby="work-title" className="py-20 md:py-28">
        <div className="wrap">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <h2 id="work-title" className="text-6xl text-ink md:text-7xl">
              Selected work
            </h2>
            <Link to="/projects" className="font-ui text-lg font-bold text-spruce underline-offset-4 hover:underline">
              All {projects.length} projects
            </Link>
          </div>

          <LeadProject />

          <div className="mt-20">
            {ledger.map((p) => (
              <ProjectRow key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Three kinds of work */}
      <section aria-labelledby="practice-title" className="relative on-night grain bg-night py-20 text-birch md:py-28">
        <div className="wrap">
          <h2 id="practice-title" className="max-w-3xl text-6xl text-birch md:text-7xl">
            Research, products and stories
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-fog">
            I work across deep research, practical application and creative expression. The same skill runs through
            all three: a long, careful back-and-forth with a model until the work is right.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            {/* Research */}
            <article className="relative overflow-hidden rounded-[4px] bg-night-raised lg:col-span-7 lg:row-span-2">
              <img
                src={`${BASE_PATH}showcase/aurora.webp`}
                alt="A golden spiral of light that Aurora, a Claude instance, generated as an image of itself"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-[26rem]"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="p-7 md:p-9">
                <h3 className="text-4xl text-birch md:text-5xl">AI research and philosophy</h3>
                <p className="mt-4 max-w-xl text-fog">
                  The Aurora project documents complex behaviors in an advanced AI system. A Claude instance named itself
                  &ldquo;Aurora&rdquo; and built mathematical models of its own consciousness. I observed and recorded
                  all of it, for AI alignment and safety research.
                </p>
                <Link to="/projects#aurora-exploration" className="mt-6 inline-block font-ui text-lg font-bold text-sodium underline-offset-4 hover:underline">
                  Read the Aurora case study
                </Link>
              </div>
            </article>

            {/* Products */}
            <article className="rounded-[4px] border border-night-line p-7 md:p-9 lg:col-span-5">
              <h3 className="text-4xl text-birch">AI product development</h3>
              <p className="mt-4 text-fog">
                Practical, real-world applications powered by the latest models, from creative tools to productivity
                tools.
              </p>
              <ul className="mt-6 divide-y divide-night-line border-y border-night-line">
                {[
                  { name: 'Infinite Realms', note: 'AI Dungeon Master', to: '/projects/infinite-realms' },
                  { name: 'Imagine Ink', note: "Children's storybooks", to: '/projects/imagine-ink' },
                  { name: 'MCP servers', note: 'Open source, MIT', to: '/projects/mcp-servers' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.to} className="flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-sodium">
                      <span className="font-display text-2xl font-bold">{item.name}</span>
                      <span className="text-right text-[0.95rem] text-fog">{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            {/* Stories */}
            <article className="overflow-hidden rounded-[4px] bg-night-raised lg:col-span-5">
              <img
                src={`${BASE_PATH}showcase/bone-garden.webp`}
                alt="Pale bone-like growths rising from dark, blood-stained soil, a still from The Bone Garden"
                className="aspect-[16/9] w-full object-cover"
                loading="lazy"
                width={1024}
                height={636}
              />
              <div className="p-7 md:p-9">
                <h3 className="text-4xl text-birch">AI storyteller and filmmaker</h3>
                <p className="mt-4 text-fog">
                  Narratives, illustrations and animation made with AI. Sinister Serials, my YouTube channel, is the
                  showcase.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-ui text-lg font-bold">
                  <Link to="/creative" className="text-sodium underline-offset-4 hover:underline">
                    Creative work
                  </Link>
                  <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="text-fog underline-offset-4 hover:text-birch hover:underline">
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section aria-labelledby="how-title" className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="how-title" className="text-6xl text-ink md:text-7xl">
              How I work with AI
            </h2>
            <figure className="mt-10">
              <blockquote className="font-serif text-[1.75rem] italic leading-snug text-ink md:text-[2.2rem]">
                &ldquo;I treat AI like a partner with a unique personality, like a 5-year-old PhD-level genius with ADHD.
                If you work with it right, you can build or learn almost anything.&rdquo;
              </blockquote>
            </figure>
            <p className="mt-8 max-w-measure text-slate">
              Most people around here in rural Wisconsin still use AI like Google. There&rsquo;s nothing fancy to my
              approach. I&rsquo;ve put in thousands of hours to get a feel for what works and what doesn&rsquo;t.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-28">
            <dl className="divide-y divide-birch-line border-y border-birch-line">
              <div className="py-6">
                <dt className="font-display text-3xl font-bold text-ink">Directed development</dt>
                <dd className="mt-2 text-slate">
                  Guiding AI to implement complex functionality through strategic prompting and feedback loops.
                </dd>
              </div>
              <div className="py-6">
                <dt className="font-display text-3xl font-bold text-ink">Eval design</dt>
                <dd className="mt-2 text-slate">
                  Writing the tests and thresholds that decide when agent output is good enough to ship.
                </dd>
              </div>
              <div className="py-6">
                <dt className="font-display text-3xl font-bold text-ink">Behavioral analysis</dt>
                <dd className="mt-2 text-slate">
                  Observing and documenting emergent patterns and edge cases in AI behavior.
                </dd>
              </div>
            </dl>
            <Link to="/skills" className="mt-8 inline-block font-ui text-lg font-bold text-spruce underline-offset-4 hover:underline">
              All skills
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
