import { Brain, BookOpen, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../config';

const About = () => {
  return (
    <>
      <section
      className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white"
      style={{
        backgroundImage: `url('${BASE_PATH}backgrounds/about-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom">
          <h1 className="mb-6 text-primary-300 text-center font-serif">About Rob Hanson</h1>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2>The short version</h2>
              <p>
                I am an AI-native operator and builder in Chetek, Wisconsin. My day job is factory distribution
                (~7–4). Nights and weekends since ChatGPT launched, I have treated frontier models as daily
                collaborators — historically 100+ messages a day and hours of AI podcasts on commute/shift —
                then gone home to A/B the same idea on Claude, Gemini, and Grok.
              </p>
              
              <h2>What I am (and am not)</h2>
              <p>
                I do not present as a classically credentialed software engineer. High school on paper; continuous
                learning everywhere else. I pair with AI for code and say so. When an assistant over-claims
                "you built X," my habit is to correct it. The asset is judgment under constraints and production
                orchestration — not prompt novelty.
              </p>

              <h2>Selected signal</h2>
              <ul>
                <li><strong>Infinite Realms</strong> — live AI solo D&amp;D platform (Franz); 163+ campaign bibles; Stripe; Hetzner. Passion project / future product revenue once marketed — not current income.</li>
                <li><strong>Eval taste on a live repo</strong> — 2026 De-Slop Wave 8: evidence before delete, no silent data drops, unify auth.</li>
                <li><strong>Anthropic Model Behavior Architect take-home (May 2025)</strong> — worked the 2-page behavior-spec task (cut 6pp → 2pp). Application/take-home work only — not a hire claim.</li>
                <li><strong>Tibetan translation pipeline</strong>, <strong>TADA TTS MLX port</strong>, and careful Aurora continuity work (philosophy/systems — not "proof of machine consciousness").</li>
              </ul>
              
              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h3 className="flex items-center gap-2 text-xl mb-3">
                  <Clock className="text-primary-600" size={24} />
                  How a day actually works
                </h3>
                <p>
                  Factory shift, family logistics (son Logan), then a deep build window roughly
                  9pm–1am. AI podcasts and reading fill the commute and downtime. Looking for remote /
                  mostly-remote roles where that judgment is the job — including hybrid ~1 week/month in CA
                  when the seat is worth it.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
                <h3 className="flex items-center gap-2 text-xl mb-3 text-primary-800">
                  <Heart className="text-primary-600" size={24} />
                  Why safety / evals
                </h3>
                <p>
                  I follow Anthropic and AI-safety discourse seriously because I want a positive future for my
                  family — and because building multi-turn agents forces the same questions evals ask:
                  role integrity, refuse-without-collapse, and grading long-horizon quality.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h3 className="flex items-center gap-2 text-xl mb-3">
                  <BookOpen className="text-primary-600" size={24} />
                  Heritage note
                </h3>
                <p>
                  Anishinaabe (Ojibwe) heritage informs how I think about continuity, responsibility, and
                  keeping an open mind about mind itself — without turning that into unverifiable claims
                  about machine consciousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">Operating principles</h2>
            <p className="text-lg text-gray-600">
              Practical shipping plus careful observation — without romanticizing either.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <Link to="/learning-resources" className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-primary-600" />
                </Link>
                <h3 className="text-xl font-bold mb-3">Listen → test → ship-or-cut</h3>
                <p className="text-gray-600">
                  New capability hits a podcast or paper; I try it across models the same night; keep what
                  survives contact with a real task.
                </p>
              </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evidence before cut</h3>
              <p className="text-gray-600">
                On live products I prefer grep-verified deletes, explicit casualty lists, and deprecate-not-delete
                over silent cleanup that hides risk.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family-first decisions</h3>
              <p className="text-gray-600">
                Career and money choices get filtered through family impact first, then economics —
                including care responsibilities at home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
