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

        {/* Modified grid layout to center the last card */}
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {featuredProjects.map((project, index) => {
            let variant = 'default';
            if (project.id === 'tibetan-translation') {
              variant = 'tibetan';
            } else if (project.id === 'story-automation') {
              variant = 'story-automation';
            } else if (project.id === 'api-key-wallet') {
              variant = 'keyguardian';
            } else if (project.id === 'recipe-scraper') {
              variant = 'recipe-scraper';
            } else if (project.id === 'astral-audio') {
              variant = 'astral-audio';
            }

            // Apply col-span-2 to the last card on medium screens and up
            const isLastCard = index === featuredProjects.length - 1;
            const cardClasses = isLastCard ? 'md:col-span-2' : '';

            return <ProjectCard key={project.id} project={project} variant={variant} className={cardClasses} />;
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
