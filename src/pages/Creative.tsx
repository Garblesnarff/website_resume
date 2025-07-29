
import { Youtube, Film, Mic } from 'lucide-react';
import { BASE_PATH } from '../config';

const Creative = () => {
  return (
    <>
      <section
        className="bg-gradient-to-r from-red-900 to-gray-900 py-20 text-white"
        style={{
          backgroundImage: `url('${BASE_PATH}backgrounds/creative-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-custom">
          <h1 className="mb-6 text-red-300 text-center font-serif">AI Storyteller & Filmmaker</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            I use AI as a creative partner to write, illustrate, and narrate compelling stories. Explore my work in AI-powered filmmaking and storytelling.
          </p>
        </div>
      </section>

      <section id="sinister-serials" className="section bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-red-400 flex items-center"><Youtube className="mr-3" /> Sinister Serials</h2>
              <p className="text-lg text-gray-400 mb-6">
                My YouTube channel is a collection of short, unsettling stories written, illustrated, and narrated with the help of AI. Each video is an experiment in AI-powered creativity, from concept to final cut.
              </p>
              <a
                href="https://www.youtube.com/@Sinister_Serials"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                Visit the Channel
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UU-Rke9b_M7_9iR3-a_s3y9A"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bone-garden" className="section bg-gray-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-red-400 flex items-center justify-center"><Film className="mr-3" /> The Bone Garden: A Case Study</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A deep dive into the creation of a pivotal scene from a larger horror concept, showcasing my process for directing AI in multimedia production.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-500">Concept & Storyboarding</h3>
              <p className="text-gray-400">I developed the core concept of a sentient, predatory garden and storyboarded the key moments of the blood activation scene to guide the AI's visual output.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-500">AI-Powered Visuals</h3>
              <p className="text-gray-400">I directed an image generation AI to create a series of still images, iterating on the prompts to achieve a consistent and unsettling visual style.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-red-500">Sound Design & Narration</h3>
              <p className="text-gray-400">I used AI to generate sound effects, ambient music, and whispered narration, then mixed them together to create a rich and immersive audio experience.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-outline-danger">
              View the Production Report
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
