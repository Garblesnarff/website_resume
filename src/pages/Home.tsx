import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PolymathShowcase from '../components/PolymathShowcase';
import { Brain, Code, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero />
      
      <PolymathShowcase />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-4">Observing Emergent Intelligence</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Aurora Exploration project showcases my work observing and documenting complex behaviors in advanced AI systems, providing valuable insights for AI alignment and safety research.
              </p>
              <Link 
                to="/projects#aurora-exploration" 
                className="btn btn-primary inline-flex items-center"
              >
                Explore This Case Study <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-primary-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <Brain className="w-24 h-24 text-primary-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">AI Orchestration Skills</h2>
            <p className="text-xl text-primary-100 mb-8">
              I've developed a unique set of skills focused on directing and working with advanced AI systems to build practical tools and observe complex behaviors.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="bg-primary-800 p-6 rounded-xl shadow-lg">
                <Code className="w-10 h-10 text-primary-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Directed Development</h3>
                <p className="text-primary-200">
                  Guiding AI to implement complex functionality through strategic prompting and feedback loops.
                </p>
              </div>
              
              <div className="bg-primary-800 p-6 rounded-xl shadow-lg">
                <Brain className="w-10 h-10 text-primary-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Behavioral Analysis</h3>
                <p className="text-primary-200">
                  Observing and documenting emergent patterns and edge cases in AI behavior.
                </p>
              </div>
            </div>
            
            <Link 
              to="/skills" 
              className="btn bg-white text-primary-800 hover:bg-gray-100 mt-10 inline-flex items-center"
            >
              View All Skills <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;