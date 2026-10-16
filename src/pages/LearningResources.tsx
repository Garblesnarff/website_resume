import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {
  coreAiPodcasts,
  techStartupAiPodcasts,
  aiLeadersOrganizations,
  specializedAiPodcasts,
} from '../data/learning-resources';

type Podcast = { name: string; handle: string; description: string };

const groups: { title: string; items: Podcast[] }[] = [
  { title: 'Core AI-focused podcasts', items: coreAiPodcasts },
  { title: 'Tech and startup podcasts with strong AI coverage', items: techStartupAiPodcasts },
  { title: 'Specialized AI podcasts', items: specializedAiPodcasts },
  { title: 'AI leaders and organizations', items: aiLeadersOrganizations },
];

const LearningResources = () => {
  return (
    <>
      <PageHeader
        kicker={
          <Link to="/about" className="inline-flex items-center gap-2 hover:text-birch">
            <ArrowLeft size={16} aria-hidden="true" /> About
          </Link>
        }
        title="What I listen to"
        intro="A curated list of the AI podcasts and YouTube channels that I have found helpful in my own AI learning journey."
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reading lg:col-span-7">
            <h2 className="!pt-0">Why I listen</h2>
            <p>
              I&rsquo;m not just listening to these to kill time driving my forklift around the factory. When I hear about
              some new capability or technique, I immediately start testing it with different models when I get home.
              I&rsquo;ll take what I learn from Cognitive Revolution about reasoning patterns and try it out with Claude,
              then compare it with Gemini and Grok to see the differences. This constant cycle of listen, test, build has
              taught me way more than I would&rsquo;ve learned in some formal education program. It&rsquo;s all
              practical, hands-on learning that I can immediately apply to whatever I&rsquo;m building.
            </p>
            <h2>Daily audio feed</h2>
            <p>
              These podcasts form the backbone of my 6+ hours of daily learning during factory shifts and commutes. They
              keep me connected to the latest developments, perspectives, and debates in AI.
            </p>
          </div>

          <aside className="lg:col-span-5" aria-labelledby="start-title">
            <div className="rounded-[4px] bg-night p-7 text-birch md:p-9">
              <h2 id="start-title" className="text-4xl text-birch">
                Recommended starting point
              </h2>
              <ol className="mt-6 space-y-5">
                {[
                  <>AI Explained&rsquo;s introduction to Large Language Models</>,
                  <>Andrej Karpathy&rsquo;s &ldquo;State of GPT&rdquo; presentation</>,
                  <>
                    <a href="https://youtu.be/JOKvE47G_xA" target="_blank" rel="noopener noreferrer" className="text-sodium underline decoration-sodium/40 underline-offset-[3px] hover:decoration-sodium">
                      The Cognitive Revolution interview with Professor Derya Unutmaz
                    </a>{' '}
                    on AI in biomedical research. This episode shows how AI is transforming scientific discovery, with
                    insights from a ChatGPT Pro grant recipient who&rsquo;s using AI to revolutionize aging research and
                    cancer immunotherapy.
                  </>,
                  <>This Day in AI&rsquo;s weekly recap episodes</>,
                ].map((item, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span aria-hidden="true" className="font-display text-3xl font-extrabold leading-none text-sodium">
                      {i + 1}
                    </span>
                    <span className="text-fog">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section aria-label="Podcasts and channels" className="pb-20 md:pb-28">
        <div className="wrap space-y-16">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline justify-between gap-4 border-b-[3px] border-ink pb-3">
                <h2 className="text-4xl text-ink md:text-5xl">{g.title}</h2>
                <span className="meta shrink-0 text-slate">{g.items.length} channels</span>
              </div>
              <ul className="grid gap-x-12 md:grid-cols-2">
                {g.items.map((p) => (
                  <li key={p.name} className="border-b border-birch-line py-5">
                    <a href={p.handle} target="_blank" rel="noopener noreferrer" className="font-display text-[1.7rem] font-bold leading-tight text-ink hover:text-spruce">
                      {p.name}
                    </a>
                    <p className="mt-1.5 text-[0.98rem] text-slate">{p.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-[0.95rem] italic text-slate">
            This list is regularly updated as new resources become available. Last updated: April 23, 2025
          </p>
        </div>
      </section>
    </>
  );
};

export default LearningResources;
