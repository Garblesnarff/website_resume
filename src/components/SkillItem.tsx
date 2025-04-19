import { Skill } from '../types';

interface SkillItemProps {
  skill: Skill;
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

const SkillItem = ({ skill }: SkillItemProps) => {
  const categoryColor = getCategoryColor(skill.category);
  
  return (
    <div className="card p-6 h-full flex flex-col animate-slideUp">
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-gray-600 mb-3 flex-grow">{skill.description}</p>
      <div className="mt-2">
        <span className={`${categoryColor} px-3 py-1 rounded-full text-sm inline-block`}>
          {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default SkillItem;