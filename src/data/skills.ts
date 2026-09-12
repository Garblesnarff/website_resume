import { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'judgment',
    name: 'Judgment under constraints',
    description: 'Grading multi-turn model behavior, refuse-without-collapse, continuity under pressure, and eval design — including cleanup passes that require evidence before cutting code or data.',
    category: 'core'
  },
  {
    id: 'orchestration',
    name: 'Production orchestration with AI',
    description: 'Running listen → cross-model test → ship-or-cut loops to build and operate real systems (apps, pipelines, content) with frontier models as collaborators.',
    category: 'core'
  },
  {
    id: 'learning',
    name: 'Self-directed learning at volume',
    description: 'Factory/commute AI podcasts plus nightly experimentation across Claude, Gemini, and Grok since ChatGPT launched. Historically 100+ AI messages/day.',
    category: 'soft'
  },
  {
    id: 'workflow-design',
    name: 'Iterative AI workflow design & refinement',
    description: 'Creating and optimizing processes that leverage AI capabilities to achieve specific outcomes.',
    category: 'core'
  },
  {
    id: 'debugging',
    name: 'Conversational debugging',
    description: 'Diagnosing and correcting issues in AI-generated systems through targeted conversation and verification.',
    category: 'technical'
  },
  {
    id: 'behavior-eval',
    name: 'Evaluating AI system behavior',
    description: 'Identifying subtle and edge-case behaviors — especially multi-turn / agentic settings relevant to safety evals.',
    category: 'analysis'
  },
  {
    id: 'multi-modal',
    name: 'Multi-modal AI integration',
    description: 'Coordinating text, audio, and image generation pipelines via AI-assisted development.',
    category: 'technical'
  },
  {
    id: 'tool-integration',
    name: 'Tool & API orchestration via AI',
    description: 'Directing AI to integrate external tools and APIs into working products.',
    category: 'technical'
  },
  {
    id: 'prompt-engineering',
    name: 'Advanced prompting & strategy',
    description: 'Crafting prompts, rubrics, and harnesses until output matches intent — and cutting scope when it does not.',
    category: 'core'
  },
  {
    id: 'attribution',
    name: 'Honest attribution',
    description: 'Separating decisions I made from artifacts AI generated — corrects inflated "you built X" claims.',
    category: 'soft'
  },
  {
    id: 'ethics',
    name: 'AI safety & ethical awareness',
    description: 'Follows Anthropic/safety discourse seriously (Constitution, RSP, eval culture) and builds for a positive future for family.',
    category: 'soft'
  }
];

export const getSkillsByCategory = () => {
  return {
    core: skills.filter(skill => skill.category === 'core'),
    technical: skills.filter(skill => skill.category === 'technical'),
    analysis: skills.filter(skill => skill.category === 'analysis'),
    soft: skills.filter(skill => skill.category === 'soft')
  };
};
