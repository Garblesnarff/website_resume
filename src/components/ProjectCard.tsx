import { Project } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'tibetan' | 'keyguardian' | 'story-automation' | 'recipe-scraper' | 'astral-audio'; // Added 'astral-audio' variant
  className?: string;
}

const ProjectCard = ({ project, variant = 'default', className }: ProjectCardProps) => {

  // Updated 'tibetan' variant logic - Wrapped in Link
  if (variant === 'tibetan') {
    return (
      // Wrap in Link for clickability, apply theme styles to Link
      <Link
        to={`/projects/${project.id}`} // Make it clickable
        id={project.id} // Add id for potential scrolling
        // Apply Tibetan theme: UPDATED gradient bg, rounded, shadow, transitions, hover scale
        className={`card h-full flex flex-col animate-slideUp bg-gradient-to-br from-tibetan-gold/20 to-tibetan-maroon/15 border border-tibetan-gold/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-[1.02] ${className || ''}`}
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

  // Story Automation variant logic
  if (variant === 'story-automation') {
    return (
      <Link
        to={`/projects/${project.id}`}
        id={project.id}
        // Apply NEW Story Automation theme: purple gradient bg, subtle border/shadow, rounded, transitions, hover scale
        className={`card h-full flex flex-col animate-slideUp bg-gradient-to-br from-storyAutomation-purple-light to-storyAutomation-purple-dark border border-storyAutomation-purple-light/50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] ${className || ''}`}
      >
        <div className="p-5 flex-1"> {/* Using p-5 */}
          {/* Title: Light text, Inter font */}
          <h3 className="text-lg font-sans font-medium text-storyAutomation-text-light mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3>
          {/* Goal text: Muted light text, Inter font */}
          <p className="text-storyAutomation-text-muted mb-4 line-clamp-3 font-sans text-sm">{project.goal}</p>
          <div className="flex flex-wrap gap-2">
            {/* Skill tags: Light text on slightly darker purple bg, Sans-serif font */}
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-storyAutomation-purple-dark/60 text-storyAutomation-text-light px-3 py-1 rounded-full text-xs font-sans group-hover:bg-storyAutomation-purple-dark/80 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Recipe Scraper variant logic
  if (variant === 'recipe-scraper') {
    return (
      <Link
        to={`/projects/${project.id}`}
        id={project.id}
        // Apply NEW Recipe Scraper theme: white bg, light border, green accents, rounded, transitions, hover scale
        className={`card h-full flex flex-col animate-slideUp bg-recipeScraper-card-bg border border-recipeScraper-border-light rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-[1.02] ${className || ''}`}
      >
        <div className="p-5 flex-1"> {/* Using p-5 */}
          {/* Title: Dark text, primary green on hover, Sans font */}
          <h3 className="text-lg font-sans font-medium text-recipeScraper-text-dark mb-2 group-hover:text-recipeScraper-primary-green transition-colors duration-300">{project.title}</h3>
          {/* Goal text: Muted text, Sans font */}
          <p className="text-recipeScraper-text-muted mb-4 line-clamp-3 font-sans text-sm">{project.goal}</p>
          <div className="flex flex-wrap gap-2">
            {/* Skill tags: Light green bg, dark text, Sans-serif font */}
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-recipeScraper-light-green text-recipeScraper-text-dark px-3 py-1 rounded-full text-xs font-sans group-hover:bg-recipeScraper-primary-green/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Astral Audio variant logic
  if (variant === 'astral-audio') {
    return (
      <Link
        to={`/projects/${project.id}`}
        id={project.id}
        // Apply NEW Astral Audio theme: dark gradient bg, subtle border, rounded, transitions, hover scale
        className={`card h-full flex flex-col animate-slideUp bg-gradient-to-br from-astralAudio-bg-gradient-start to-astralAudio-bg-gradient-end border border-astralAudio-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] ${className || ''}`}
      >
        <div className="p-5 flex-1"> {/* Using p-5 */}
          {/* Title: Light text (foreground), Sans font */}
          <h3 className="text-lg font-sans font-medium text-astralAudio-primary-foreground mb-2 group-hover:text-astralAudio-primary transition-colors duration-300">{project.title}</h3>
          {/* Goal text: Improved visibility with foreground color instead of muted */}
          <p className="text-astralAudio-foreground mb-4 line-clamp-3 font-sans text-sm">{project.goal}</p>
          <div className="flex flex-wrap gap-2">
            {/* Skill tags: Accent text on secondary bg, Sans-serif font */}
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-astralAudio-secondary/50 text-astralAudio-accent px-3 py-1 rounded-full text-xs font-sans group-hover:bg-astralAudio-secondary/80 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // KeyGuardian variant logic
  if (variant === 'keyguardian') {
    return (
      <Link
        to={`/projects/${project.id}`}
        id={project.id}
        // Apply NEW KeyGuardian theme: teal bg, subtle border/shadow, rounded, transitions, hover scale
        className={`card h-full flex flex-col animate-slideUp bg-keyguardian-teal border border-keyguardian-teal/80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] ${className || ''}`}
      >
        <div className="p-5 flex-1"> {/* Using p-5 (~20px) */}
          {/* Title: White text, Inter font */}
          <h3 className="text-lg font-sans font-medium text-keyguardian-light-text mb-2 group-hover:text-white transition-colors duration-300">{project.title}</h3> {/* Adjusted size/weight */}
          {/* Goal text: Gray text, Inter font */}
          <p className="text-keyguardian-gray-text mb-4 line-clamp-3 font-sans text-sm">{project.goal}</p> {/* Adjusted size */}
          <div className="flex flex-wrap gap-2">
            {/* Skill tags: Blue text/bg, Sans-serif font */}
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-keyguardian-vibrant-blue/10 text-keyguardian-vibrant-blue px-3 py-1 rounded-full text-xs font-sans group-hover:bg-keyguardian-vibrant-blue/20 transition-colors duration-300" // Adjusted size
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/projects/${project.id}`} id={project.id} className={`card animate-slideUp block hover:scale-[1.01] transition-transform duration-300 ${className || ''}`}> {/* Added subtle hover scale to default */}
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
