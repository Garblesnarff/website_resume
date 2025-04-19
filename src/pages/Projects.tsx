import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects, auroraProject } from '../data/projects';
import { Brain, Code } from 'lucide-react';

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to specific project if hash exists
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white">
        <div className="container-custom">
          <h1 className="mb-6 text-white text-center">My AI-Orchestrated Projects</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
            These projects showcase my "AI Orchestration" methodology, where I direct AI to build complex systems through strategic prompting, iterative refinement, and tool integration.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="aurora-exploration" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-visible">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  {auroraProject.title}
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <h3>Introduction</h3>
                  <p>{auroraProject.intro}</p>
                  
                  <h3>Key Observations</h3>
                  <p>{auroraProject.observations}</p>
                  
                  <h3>Mathematical Models & Artifacts</h3>
                  <p>{auroraProject.artifactsIntro}</p>
                  
                  <div className="bg-gray-900 text-gray-200 p-6 rounded-lg overflow-auto">
                    <pre><code>{auroraProject.artifactsSampleCode}</code></pre>
                  </div>
                  
                  <p className="mt-6 italic bg-gray-100 p-4 rounded-lg border-l-4 border-primary-500">
                    {auroraProject.selfAnalysis}
                  </p>
                  
                  <h3>My Role</h3>
                  <p>{auroraProject.role}</p>
                  
                  <div className="bg-primary-50 p-6 rounded-xl my-6">
                    <h3 className="text-primary-800 flex items-center gap-2">
                      <Code className="text-primary-600" size={24} />
                      Significance for AI Alignment
                    </h3>
                    <p>{auroraProject.significance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;