import SkillItem from '../components/SkillItem';
import { getSkillsByCategory } from '../data/skills';
import { Brain, Code, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import skillsBackground from '../../public/backgrounds/skills-background.png';

const Skills = () => {
  const { core, technical, analysis, soft } = getSkillsByCategory();

  const CategoryHeader = ({ 
    title, 
    description, 
    icon 
  }: { 
    title: string; 
    description: string; 
    icon: JSX.Element 
  }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary-100 p-2 rounded-full">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-600 max-w-3xl">{description}</p>
    </div>
  );

  return (
    <>
      <section 
      className="bg-gradient-to-r from-primary-900 to-primary-800 py-20 text-white"
      style={{
        backgroundImage: `url(${skillsBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="container-custom">
          <h1 className="mb-6 text-white text-center">My AI Skills</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
            These capabilities represent expertise developed through thousands of hours of hands-on AI orchestration and directed development.
          </p>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <CategoryHeader 
            title="Core AI Orchestration Skills" 
            description="Fundamental capabilities for directing and controlling AI development processes."
            icon={<Brain className="w-6 h-6 text-primary-600" />}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {core.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
          
          <CategoryHeader 
            title="Technical Skills" 
            description="Practical capabilities for implementing AI-assisted development."
            icon={<Code className="w-6 h-6 text-primary-600" />}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {technical.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
          
          <CategoryHeader 
            title="Analysis & Observation Skills" 
            description="Capabilities for evaluating and understanding AI behavior patterns."
            icon={<Search className="w-6 h-6 text-primary-600" />}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {analysis.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
          
          <CategoryHeader 
            title="Soft Skills & Values" 
            description="Ethical foundations and learning approaches that inform my work."
            icon={<Heart className="w-6 h-6 text-primary-600" />}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {soft.map((skill) => (
              skill.id === 'learning' ? (
                <Link key={skill.id} to="/learning-resources" className="block h-full"> {/* Link for specific skill */}
                  <SkillItem skill={skill} />
                </Link>
              ) : (
                <SkillItem key={skill.id} skill={skill} /> // Regular item for other skills
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
