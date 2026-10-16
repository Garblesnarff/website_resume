import { Youtube } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { BASE_PATH, CONTACT } from '../config';

const steps = [
  {
    title: 'Concept and storyboarding',
    text: "I developed the core concept of a sentient, predatory garden and storyboarded the key moments of the blood activation scene to guide the AI's visual output.",
  },
  {
    title: 'AI-powered visuals',
    text: 'I directed an image generation AI to create a series of still images, iterating on the prompts to achieve a consistent and unsettling visual style.',
  },
  {
    title: 'Sound design and narration',
    text: 'I used AI to generate sound effects, ambient music, and whispered narration, then mixed them together to create a rich and immersive audio experience.',
  },
];

const Creative = () => {
  return (
    <>
      <PageHeader
        title="AI storyteller and filmmaker"
        intro="I use AI as a creative partner to write, illustrate, and narrate compelling stories. Explore my work in AI-powered filmmaking and storytelling."
      />

      <section id="sinister-serials" aria-labelledby="serials-title" className="py-16 md:py-24">
        <div className="wrap grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="serials-title" className="text-6xl text-ink md:text-7xl">
              Sinister Serials
            </h2>
            <p className="mt-6 max-w-measure text-lg">
              My YouTube channel is a collection of short, unsettling stories written, illustrated, and narrated with the
              help of AI. Each video is an experiment in AI-powered creativity, from concept to final cut.
            </p>
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ink mt-8">
              <Youtube size={18} aria-hidden="true" /> Visit the channel
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-video overflow-hidden rounded-[4px] bg-night">
              <iframe
                src="https://www.youtube-nocookie.com/embed/videoseries?list=UU5gmVtEiFVL83qAih4QCoBw"
                title="Sinister Serials, latest uploads"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bone-garden" aria-labelledby="bone-title" className="relative on-night grain bg-night text-birch">
        <div className="grid lg:grid-cols-2">
          <img
            src={`${BASE_PATH}showcase/bone-garden.webp`}
            alt="Pale bone-like growths rising from dark, blood-stained soil"
            className="h-72 w-full object-cover md:h-[28rem] lg:h-full"
            loading="lazy"
            width={1024}
            height={636}
          />
          <div className="px-4 py-16 sm:px-8 md:py-24 lg:px-14">
            <p className="meta text-fog">Case study</p>
            <h2 id="bone-title" className="mt-4 text-[clamp(3rem,6vw,5rem)] uppercase leading-[0.86] text-birch">
              The Bone Garden
            </h2>
            <p className="mt-6 max-w-lg text-lg text-fog">
              A deep dive into the creation of a pivotal scene from a larger horror concept, showcasing my process for
              directing AI in multimedia production.
            </p>
            <ol className="mt-12 space-y-8">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <span aria-hidden="true" className="font-display text-4xl font-extrabold leading-none text-sodium">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-3xl text-birch">{s.title}</h3>
                    <p className="mt-2 max-w-md text-fog">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
