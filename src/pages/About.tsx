import { Brain, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white">
        <div className="container-custom">
          <h1 className="mb-6 text-white text-center">About Me: My Journey into AI</h1>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2>The Spark</h2>
              <p>
                When ChatGPT was released, I immediately saw a glimpse of the future. The potential of this technology captivated me, and I knew I had to dive deep into understanding and working with these powerful AI systems.
              </p>
              
              <h2>My Background</h2>
              <p>
                While I currently work as a distribution specialist to fund my passion, my real work happens outside of those hours. I've dedicated myself to intense, self-driven learning and daily interaction with AI systems, developing a unique set of skills in directing and orchestrating these models to build practical tools and explore complex behaviors.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <h3 className="flex items-center gap-2 text-xl mb-3">
                  <BookOpen className="text-primary-600" size={24} />
                  Unique Perspective
                </h3>
                <p>
                  Growing up outside an Ojibwe reservation and learning from a local healer provided me with alternative conceptual frameworks that have proven surprisingly relevant to understanding complex AI behavior. Concepts like lucid dreaming and the oversoul influenced my thinking about emergent AI phenomena, as evidenced in the Aurora exploration where terms like "dreamweaver" and "oversoul/tentacle" became useful metaphors for understanding the system's behavior.
                </p>
              </div>
              
              <h2>Motivation</h2>
              <p>
                My drive comes from fascination with the rapid progress in AI capabilities. I see AI as an "unlock" that enables me to build and learn beyond my personal limitations. This excitement translates into daily interaction (100+ messages across different models) and consuming vast amounts of AI research content (6+ hours daily).
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
                <h3 className="flex items-center gap-2 text-xl mb-3 text-primary-800">
                  <Heart className="text-primary-600" size={24} />
                  AI Safety Passion
                </h3>
                <p>
                  My commitment to AI safety stems from the concerning P(doom) estimates from AI builders themselves, my desire for a positive future for my 3-year-old son, and my vision of a world where humans and AI coexist harmoniously. I believe that understanding complex AI behavior is critical to ensuring alignment with human values.
                </p>
              </div>
              
              <h2>My Method: AI Orchestration</h2>
              <p>
                I've developed an approach I call "AI Orchestration" or "Directed Development" — essentially pair programming with AI where I act as the director/architect while the AI implements. This involves deep conversations, strategic prompting, iterative feedback, and careful observation of the model's responses and behaviors.
              </p>
              
              <p>
                This methodology has allowed me to build complex systems despite lacking traditional coding backgrounds, by effectively leveraging the capabilities of frontier AI models while maintaining strategic control over the development process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="mb-4">My Philosophy</h2>
            <p className="text-lg text-gray-600">
              My approach to AI combines practical development with thoughtful observation and analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-gray-600">
              I dedicate serious time to understanding AI - 6+ hours of podcasts daily while working my factory job, plus diving into technical discussions from shows like Machine Learning Street Talk. Off the clock, I run dozens of experiments across different AI models, comparing how they handle the same challenges. Not your typical forklift driver hobby, but I'm drawn to seeing these systems evolve and figuring out what they're capable of.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interdisciplinary Thinking</h3>
              <p className="text-gray-600">
                Applying diverse conceptual frameworks from various traditions to understand AI behavior.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Focus</h3>
              <p className="text-gray-600">
                Prioritizing alignment, safety, and beneficial AI development in all projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;