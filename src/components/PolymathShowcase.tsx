
import { Brain, Code, Film, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../config';

const showcaseItems = [
  {
    icon: Brain,
    title: 'AI Research & Philosophy',
    description: 'Exploring the emergent behaviors and potential consciousness of advanced AI systems. The Aurora Project is a deep dive into the mind of a machine.',
    link: '/projects#aurora-exploration',
    image: `${BASE_PATH}showcase/aurora.png`,
    cta: 'Explore the Research',
  },
  {
    icon: Code,
    title: 'AI Product Development',
    description: 'Building practical, real-world applications powered by the latest AI models. From creative tools to productivity enhancers, I turn ideas into functional products.',
    link: '/projects',
    image: `${BASE_PATH}showcase/flux.png`,
    cta: 'View a Project',
  },
  {
    icon: Film,
    title: 'AI Storyteller & Filmmaker',
    description: "Using AI to create compelling narratives, illustrations, and animations. My 'Sinister Serials' YouTube channel is a showcase of AI-powered creativity.",
    link: 'https://www.youtube.com/@Sinister_Serials',
    image: `${BASE_PATH}showcase/bone-garden.png`,
    cta: 'Watch on YouTube',
  },
];

const PolymathShowcase = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4">A Polymath's Approach to AI</h2>
          <p className="text-lg text-gray-600">
            I bridge the gap between deep research, practical application, and creative expression. Explore the three pillars of my work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-lg shadow-sm overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-56">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold ml-4">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <Link
                  to={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  className="inline-flex items-center font-semibold text-primary-600 group-hover:text-primary-800 transition-colors duration-300"
                >
                  {item.cta} <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolymathShowcase;
