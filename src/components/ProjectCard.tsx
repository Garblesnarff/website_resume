import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const ProjectCard = ({ project, compact = false }: ProjectCardProps) => {
  if (compact) {
    return (
      <div className="card h-full flex flex-col animate-slideUp">
        <div className="p-6 flex-1">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{project.goal}</p>
          <Link 
            to={`/projects#${project.id}`} 
            className="text-primary-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id={project.id} className="card animate-slideUp">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Goal</h4>
          <p className="text-gray-700">{project.goal}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">My Role / The Process</h4>
          <p className="text-gray-700">{project.process}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Outcome</h4>
          <p className="text-gray-700">{project.outcome}</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-2">Skills Demonstrated</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;