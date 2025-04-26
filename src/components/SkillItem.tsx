import { Skill } from '../types';
import { Link } from 'react-router-dom';

interface SkillItemProps {
  skill: Skill;
  theme?: 'default' | 'tibetan' | 'keyguardian' | 'story-automation' | 'recipe-scraper' | 'astral-audio' | 'imagine-ink'; // Added astral-audio and imagine-ink theme options
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'core':
      return 'bg-primary-100 text-primary-800';
    case 'technical':
      return 'bg-blue-100 text-blue-800';
    case 'analysis':
      return 'bg-purple-100 text-purple-800';
    case 'soft':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const SkillItem = ({ skill, theme = 'default' }: SkillItemProps) => {

  let categoryColor = '';
  let cardClasses = 'card p-6 h-full flex flex-col animate-slideUp hover:scale-[1.01] transition-transform duration-300'; // Default Card Style
  let titleColor = 'text-gray-900'; // Default Title Color
  let titleFont = 'font-serif'; // Default Title Font
  let titleSizeWeight = 'text-xl font-bold'; // Default Title Size/Weight
  let descriptionColor = 'text-gray-600'; // Default Description Color
  let descriptionFont = 'font-sans'; // Default Description Font
  let descriptionSize = 'text-base'; // Default Description Size
  let categoryFont = 'font-sans'; // Default Category Font
  let categorySize = 'text-sm'; // Default Category Size

  if (theme === 'tibetan') {
    categoryColor = 'bg-tibetan-maroon/80 text-tibetan-gold/90';
    cardClasses = 'bg-gradient-to-br from-tibetan-gold/20 to-tibetan-maroon/15 border border-tibetan-gold/30 rounded-lg shadow-sm p-6 h-full flex flex-col animate-slideUp transition-transform duration-300 hover:scale-[1.03]';
    titleColor = 'text-tibetan-maroon';
    descriptionColor = 'text-tibetan-brown';
    // titleFont remains font-serif
    // titleSizeWeight remains text-xl font-bold
    // descriptionFont remains font-sans
    // descriptionSize remains text-base
    // categoryFont remains font-sans
    // categorySize remains text-sm
  } else if (theme === 'keyguardian') {
    categoryColor = 'bg-keyguardian-vibrant-blue/10 text-keyguardian-vibrant-blue'; // Blue accent tag
    cardClasses = 'bg-keyguardian-teal border border-keyguardian-teal/80 rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col animate-slideUp transition-all duration-300 hover:scale-[1.03]'; // Teal bg
    titleColor = 'text-keyguardian-light-text'; // White text
    descriptionColor = 'text-keyguardian-gray-text'; // Gray text
    titleFont = 'font-sans'; // Use sans-serif for KeyGuardian title
    titleSizeWeight = 'text-lg font-medium'; // Adjusted size/weight for KG
    descriptionFont = 'font-sans';
    descriptionSize = 'text-sm'; // Adjusted size for KG
    categoryFont = 'font-sans'; // Use sans-serif for category tag
    categorySize = 'text-xs'; // Adjusted size for KG
  } else if (theme === 'story-automation') { // Add Story Automation theme
    categoryColor = 'bg-storyAutomation-purple-dark/60 text-storyAutomation-text-light'; // Purple tag
    cardClasses = 'bg-gradient-to-br from-storyAutomation-purple-light to-storyAutomation-purple-dark border border-storyAutomation-purple-light/50 rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col animate-slideUp transition-all duration-300 hover:scale-[1.03]'; // Purple gradient bg
    titleColor = 'text-storyAutomation-text-light'; // Light text
    descriptionColor = 'text-storyAutomation-text-muted'; // Muted light text
    titleFont = 'font-sans'; // Use sans-serif
    titleSizeWeight = 'text-lg font-medium'; // Adjusted size/weight
    descriptionFont = 'font-sans';
    descriptionSize = 'text-sm'; // Adjusted size
    categoryFont = 'font-sans'; // Use sans-serif for category tag
    categorySize = 'text-xs'; // Adjusted size
  } else if (theme === 'recipe-scraper') { // Add Recipe Scraper theme
    categoryColor = 'bg-recipeScraper-light-green text-recipeScraper-text-dark'; // Light green tag, dark text
    cardClasses = 'bg-recipeScraper-card-bg border border-recipeScraper-border-light rounded-lg shadow-sm hover:shadow-md p-6 h-full flex flex-col animate-slideUp transition-all duration-300 hover:scale-[1.03]'; // White bg, light border
    titleColor = 'text-recipeScraper-text-dark'; // Dark text
    descriptionColor = 'text-recipeScraper-text-muted'; // Muted text
    titleFont = 'font-sans'; // Use sans-serif
    titleSizeWeight = 'text-lg font-medium'; // Adjusted size/weight
    descriptionFont = 'font-sans';
    descriptionSize = 'text-base'; // Keep base size for description
    categoryFont = 'font-sans'; // Use sans-serif for category tag
    categorySize = 'text-xs'; // Adjusted size
  } else if (theme === 'astral-audio') { // Add Astral Audio theme
    categoryColor = 'bg-astralAudio-secondary/50 text-astralAudio-accent'; // Accent tag on secondary bg
    cardClasses = 'bg-gradient-to-br from-astralAudio-bg-gradient-start to-astralAudio-bg-gradient-end border border-astralAudio-border rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col animate-slideUp transition-all duration-300 hover:scale-[1.03]'; // Dark gradient bg
    titleColor = 'text-astralAudio-primary'; // Primary color title
    descriptionColor = 'text-astralAudio-foreground'; // Light foreground text
    titleFont = 'font-sans'; // Use sans-serif
    titleSizeWeight = 'text-lg font-medium'; // Adjusted size/weight
    descriptionFont = 'font-sans';
    descriptionSize = 'text-base'; // Keep base size
    categoryFont = 'font-sans'; // Use sans-serif for category tag
    categorySize = 'text-xs'; // Adjusted size
  } else {
    // Default theme colors
    categoryColor = getCategoryColor(skill.category);
  }

  return (
    skill.name === 'Self-Directed Learning & Continuous Engagement with AI Research' ? (
      <Link to="/learning-resources" className={cardClasses}>
        {/* Apply theme colors, fonts, and sizes */}
        <h3 className={`${titleSizeWeight} ${titleFont} mb-2 ${titleColor}`}>{skill.name}</h3>
        <p className={`${descriptionColor} ${descriptionSize} mb-3 flex-grow ${descriptionFont}`}>{skill.description}</p>
        <div className="mt-auto pt-2"> {/* Push category to bottom */}
          <span className={`${categoryColor} ${categoryFont} px-3 py-1 rounded-full ${categorySize} inline-block`}>
            {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
          </span>
        </div>
      </Link>
    ) : (
      <div className={cardClasses}>
        {/* Apply theme colors, fonts, and sizes */}
        <h3 className={`${titleSizeWeight} ${titleFont} mb-2 ${titleColor}`}>{skill.name}</h3>
        <p className={`${descriptionColor} ${descriptionSize} mb-3 flex-grow ${descriptionFont}`}>{skill.description}</p>
        <div className="mt-auto pt-2"> {/* Push category to bottom */}
          <span className={`${categoryColor} ${categoryFont} px-3 py-1 rounded-full ${categorySize} inline-block`}>
            {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
          </span>
        </div>
      </div>
    )
  );
};

export default SkillItem;
