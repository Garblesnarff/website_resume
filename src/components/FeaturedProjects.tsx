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

        {/* Grid layout with proper centering for the last card */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            // Explicitly type the variant to match the expected prop type subset
            let variant: "default" | "tibetan" | "keyguardian" | "story-automation" | "recipe-scraper" | "astral-audio" | "imagine-ink" = 'default';
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
            } else if (project.id === 'imagine-ink') {
              variant = 'imagine-ink';
            }

            // Check if it's the last card and if we have an odd number of featured projects
            const isLastCard = index === featuredProjects.length - 1;
            const hasOddNumberOfProjects = featuredProjects.length % 2 === 1;
            
            // Only apply special styling if it's the last card in an odd-numbered set
            const cardWrapperClasses = isLastCard && hasOddNumberOfProjects 
              ? 'md:col-span-2 md:mx-auto md:max-w-xl' 
              : '';

            return (
              <div key={project.id} className={cardWrapperClasses}>
                <ProjectCard project={project} variant={variant} />
              </div>
            );
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
