export interface Project {
  id: string;
  title: string;
  goal: string;
  process: string;
  outcome: string;
  skills: string[];
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'technical' | 'analysis' | 'soft';
}