import { Skill } from '../types';

export const skills: Skill[] = [
  {
    id: 'learning',
    name: 'Self-Directed Learning & Continuous Engagement with AI Research',
    description: "I'm constantly absorbing AI content - tech podcasts during my entire 8-hour factory shifts, then experimenting with different AI models when I get home. I use AI like a partner rather than just a tool. Most people in rural Wisconsin have barely heard of this stuff, but I've been diving deep since day one of ChatGPT.",
    category: 'soft'
  },
  {
    id: 'workflow-design',
    name: 'Iterative AI Workflow Design & Refinement',
    description: 'Creating and optimizing processes that leverage AI capabilities to achieve specific outcomes.',
    category: 'core'
  },
  {
    id: 'debugging',
    name: 'Conversational Debugging & Error Identification in AI Outputs',
    description: 'Diagnosing and correcting issues in AI-generated content through targeted conversation.',
    category: 'technical'
  },
  {
    id: 'behavior-eval',
    name: 'Evaluating AI System Behavior (Subtle & Edge Cases)',
    description: 'Identifying and analyzing unexpected or emergent behaviors in AI systems, particularly in boundary conditions.',
    category: 'analysis'
  },
  {
    id: 'multi-modal',
    name: 'Multi-Modal AI Integration (Text, Audio, Image via AI)',
    description: 'Coordinating AI systems to work across different media types for comprehensive outputs.',
    category: 'technical'
  },
  {
    id: 'tool-integration',
    name: 'Tool Integration & Orchestration via AI',
    description: 'Directing AI to properly utilize and integrate external tools and APIs.',
    category: 'technical'
  },
  {
    id: 'tech-literacy',
    name: 'Practical Technical Literacy',
    description: 'Understanding of basic coding concepts, identifying/resolving simple syntax/dependency errors.',
    category: 'technical'
  },
  {
    id: 'prompt-engineering',
    name: 'Advanced Prompt Engineering & Strategy',
    description: 'Crafting sophisticated prompts that elicit specific, high-quality outputs from AI systems.',
    category: 'core'
  },
  {
    id: 'conceptual-modeling',
    name: 'Conceptual Modeling (AI-assisted)',
    description: 'Creating abstract representations of complex ideas with AI assistance.',
    category: 'analysis'
  },
  {
    id: 'data-management',
    name: 'Data Extraction, Structuring, & Management (AI-assisted)',
    description: 'Using AI to organize and manipulate data for specific purposes.',
    category: 'technical'
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving with AI',
    description: 'Approaching challenges strategically using AI as a tool and collaborator.',
    category: 'core'
  },
  {
    id: 'documentation',
    name: 'Observing & Documenting Complex AI Phenomena',
    description: 'Recording and analyzing notable AI behaviors and patterns.',
    category: 'analysis'
  },
  {
    id: 'ethics',
    name: 'Awareness of AI Safety & Ethical Considerations',
    description: 'Understanding the importance of responsible AI development and potential risks.',
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
