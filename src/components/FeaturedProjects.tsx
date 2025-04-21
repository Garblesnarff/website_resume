import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../data/projects';

const FeaturedProjects = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Highlighting my most significant work in AI orchestration and directed development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => {
            if (project.id === 'tibetan-translation') {
              return <ProjectCard key={project.id} project={project} variant="tibetan" />;
            } else if (project.id === 'story-automation') { // Add condition for story-automation
              return <ProjectCard key={project.id} project={project} variant="story-automation" />;
            } else { // Default to compact for other featured projects
              return <ProjectCard key={project.id} project={project} compact />;
            }
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/projects" 
            className="btn btn-outline inline-flex items-center"
          >
            View All Projects <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
