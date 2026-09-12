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
              <h2 className="mb-4">Infinite Realms — live AI product craft</h2>
              <p className="text-lg text-gray-600 mb-6">
                Solo AI D&amp;D platform with an AI DM named Franz: 163+ campaign bibles across 9 genres,
                Stripe wired, live at infiniterealms.app. The work that matters here is multi-turn behavior,
                continuity under pressure, and eval taste on a real codebase — including a 2026 de-slop pass
                that deleted only after evidence, unified auth, and refused silent data drops.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Passion project and best shot at product revenue once marketed — not current income.
                No user or revenue claims.
              </p>
              <Link 
                to="/projects" 
                className="btn btn-primary inline-flex items-center"
              >
                See selected projects <ArrowRight className="ml-2" size={18} />
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
            <h2 className="mb-6 text-white">What I bring</h2>
            <p className="text-xl text-primary-100 mb-8">
              Listen → cross-model test → ship-or-cut. Looking for remote / mostly-remote roles in
              evaluation engineering, model-behavior product/ops, AI ops, and AI-native building.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="bg-primary-800 p-6 rounded-xl shadow-lg">
                <Code className="w-10 h-10 text-primary-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Production orchestration</h3>
                <p className="text-primary-200">
                  Directing frontier models to ship real systems — with honest attribution when AI wrote the code.
                </p>
              </div>
              
              <div className="bg-primary-800 p-6 rounded-xl shadow-lg">
                <Brain className="w-10 h-10 text-primary-300 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Judgment under constraints</h3>
                <p className="text-primary-200">
                  Eval taste, multi-turn failure modes, refuse-without-collapse — grading behavior, not vibes.
                </p>
              </div>
            </div>
            
            <Link 
              to="/skills" 
              className="btn bg-white text-primary-800 hover:bg-gray-100 mt-10 inline-flex items-center"
            >
              View skills <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
