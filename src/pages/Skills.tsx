import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getSkillsByCategory } from '../data/skills';
import { Skill } from '../types';

const groups: { key: keyof ReturnType<typeof getSkillsByCategory>; title: string; description: string }[] = [
  {
    key: 'core',
    title: 'Core AI orchestration',
    description: 'Fundamental capabilities for directing and controlling AI development processes.',
  },
  {
    key: 'technical',
    title: 'Technical',
    description: 'Practical capabilities for implementing AI-assisted development.',
  },
  {
    key: 'analysis',
    title: 'Analysis and observation',
    description: 'Capabilities for evaluating and understanding AI behavior patterns.',
  },
  {
    key: 'soft',
    title: 'Soft skills and values',
    description: 'Ethical foundations and learning approaches that inform my work.',
  },
];

const SkillEntry = ({ skill }: { skill: Skill }) => {
  const isLearning = skill.id === 'learning';
  return (
    <div className="border-t border-birch-line py-6">
      <dt className="font-display text-[1.75rem] font-bold leading-tight text-ink">{skill.name}</dt>
      <dd className="mt-2 max-w-measure text-slate">
        {skill.description}
        {isLearning && (
          <>
            {' '}
            <Link to="/learning-resources" className="text-link">
              See what I listen to
            </Link>
            .
          </>
        )}
      </dd>
    </div>
  );
};

const Skills = () => {
  const byCategory = getSkillsByCategory();

  return (
    <>
      <PageHeader
        title="My AI skills"
        intro="These capabilities represent expertise developed through thousands of hours of hands-on AI orchestration and directed development."
      />

      <section className="py-16 md:py-24">
        <div className="wrap space-y-20">
          {groups.map((g) => (
            <div key={g.key} className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <h2 className="text-5xl text-ink md:text-6xl">{g.title}</h2>
                  <p className="mt-4 max-w-sm text-slate">{g.description}</p>
                </div>
              </div>
              <dl className="border-b border-birch-line lg:col-span-8">
                {byCategory[g.key].map((s) => (
                  <SkillEntry key={s.id} skill={s} />
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
