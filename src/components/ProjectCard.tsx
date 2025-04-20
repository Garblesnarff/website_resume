import { Project } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
  variant?: 'default' | 'compact' | 'tibetan'; // Renamed variant to 'tibetan'
}

const ProjectCard = ({ project, compact = false, variant = 'default' }: ProjectCardProps) => {

  // Updated 'tibetan' variant logic - Wrapped in Link
  if (variant === 'tibetan') {
    return (
      // Wrap in Link for clickability, apply theme styles to Link
      <Link
        to={`/projects/${project.id}`} // Make it clickable
        id={project.id} // Add id for potential scrolling
        // Apply Tibetan theme: UPDATED gradient bg, rounded, shadow, transitions, hover scale
        className="card h-full flex flex-col animate-slideUp bg-gradient-to-br from-tibetan-gold/20 to-tibetan-maroon/15 border border-tibetan-gold/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]"
      >
        <div className="p-6 flex-1"> {/* Inner content div */}
          {/* Title: Maroon color, Crimson Pro font */}
          <h3 className="text-xl font-serif font-bold text-tibetan-maroon mb-2 group-hover:text-tibetan-maroon/80 transition-colors duration-300">{project.title}</h3>
          {/* Goal text: Brown color, Inter font */}
          <p className="text-tibetan-brown mb-4 line-clamp-3 font-sans">{project.goal}</p>
          <div className="flex flex-wrap gap-2">
            {/* Skill tags: Maroon background, Gold text, Inter font */}
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-tibetan-maroon/80 text-tibetan-gold/90 px-3 py-1 rounded-full text-sm font-sans group-hover:bg-tibetan-maroon transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Original compact logic (Apply default fonts)
  // Base card uses rounded-xl from index.css, compact doesn't override
  if (compact) {
    return (
      <div className="card h-full flex flex-col animate-slideUp">
        <div className="p-6 flex-1">
          <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3> {/* Use font-serif */}
          <p className="text-gray-600 mb-4 line-clamp-2 font-sans">{project.goal}</p> {/* Use font-sans */}
          <Link
            to={`/projects#${project.id}`}
            className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all font-sans" // Use font-sans
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  // Original default (full) view logic (Apply default fonts)
  // Base card uses rounded-xl
  return (
    <Link to={`/projects/${project.id}`} id={project.id} className="card animate-slideUp block hover:scale-[1.01] transition-transform duration-300"> {/* Added subtle hover scale to default */}
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold mb-4">{project.title}</h3> {/* Use font-serif */}

        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold mb-2">Goal</h4> {/* Use font-serif */}
          <p className="text-gray-700 font-sans">{project.goal}</p> {/* Use font-sans */}
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold mb-2">My Role / The Process</h4> {/* Use font-serif */}
          <p className="text-gray-700 font-sans">{project.process}</p> {/* Use font-sans */}
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-serif font-semibold mb-2">Outcome</h4> {/* Use font-serif */}
          <p className="text-gray-700 font-sans">{project.outcome}</p> {/* Use font-sans */}
        </div>

        <div>
          <h4 className="text-lg font-serif font-semibold mb-2">Skills Demonstrated</h4> {/* Use font-serif */}
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-sans" // Use font-sans
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
