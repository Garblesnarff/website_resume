import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'infinite-realms',
    title: 'Infinite Realms — AI solo D&D platform',
    goal: 'Ship a production AI Dungeon Master (Franz) with long-horizon multi-turn play, campaign bibles, and real infra.',
    process: 'Orchestrated frontier models across product design, campaign content (163+ bibles / 9 genres), backend/frontend, and ops on Hetzner. Ran eval-style cleanup (2026-07 De-Slop Wave 8): delete dead code only after grep-verified zero importers; single-source spell data without silent drops; unify auth; deprecate-not-delete for built-before-wired endpoints.',
    outcome: 'Live app at infiniterealms.app; marketing at infiniterealms.tech; Stripe wired; GitHub Garblesnarff/infinite-realms-production. Passion project and best shot at product revenue once marketed — not current income (no users/revenue claimed).',
    skills: [
      'Multi-turn AI behavior / DM judgment',
      'Eval taste on a live product',
      'AI-assisted full-stack orchestration',
      'Production ops (Hetzner / Stripe)',
      'Honest attribution of AI-generated code'
    ],
    featured: true,
    links: {
      githubTool: 'https://github.com/Garblesnarff/infinite-realms-production',
      preview: 'https://infiniterealms.app',
      video: 'https://infiniterealms.tech'
    }
  },
  {
    id: 'tibetan-translation',
    title: 'Ancient Tibetan Text Translation Pipeline & Database',
    goal: 'Automate translation of multi-page historical Tibetan texts from PDFs and create an online database.',
    process: 'Orchestrated AI to handle PDF text extraction, perform page-by-page translation (required extensive iteration over 300+ messages to maintain context and accuracy), and generate the code for the database website structure and functionality. Built multi-model consensus + knowledge-graph approaches over time.',
    outcome: 'A functional tool capable of translating hundreds of pages of Tibetan scripts into 600+ pages of English, plus companion database site. Meaningful work; grant deadline was missed — not a grant win.',
    skills: [
      'AI Workflow Design', 
      'Large-Scale Text Processing via AI', 
      'Directing AI for Data Structuring & Web Development', 
      'Iterative Problem Solving', 
      'Conversational Debugging'
    ],
    featured: true,
    links: {
      githubTool: 'https://github.com/Garblesnarff/Translate',
      githubDatabase: 'https://github.com/Garblesnarff/tibetan-texts-grove',
      preview: 'https://preview--tibetan-texts-grove.lovable.app/',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'imagine-ink',
    title: 'Imagine Ink',
    goal: "Create AI-powered children's storybooks with personalized stories and illustrations.",
    process: 'Developed a seamless interface integrating AI storytelling with image generation. Built customizable page layouts, editing tools, and export functionality.',
    outcome: 'Platform for creating illustrated children\'s stories with AI assistance (DNS/Stripe configured historically).',
    skills: [
      'UI/UX Design',
      'React Development',
      'AI Image Integration',
      'Tailwind CSS',
      'User-Centered Design',
      'Responsive Web Development'
    ],
    featured: true,
    links: {
      githubTool: 'https://github.com/Garblesnarff/storybook-magic-builder',
      preview: 'imagine-ink.lovable.app',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'story-automation',
    title: 'Multi-Modal Story Automation and Narration App',
    goal: 'Generate stories from simple prompts and automatically create narrated and illustrated versions.',
    process: 'Directed AI to generate constrained stories, structure into a node format, and integrate ElevenLabs + image APIs via AI-assisted code generation.',
    outcome: 'A Python node-editor application that turns story loglines into multi-modal experiences with generated audio and images.',
    skills: [
      'Advanced Creative Prompting', 
      'Multi-Modal AI Integration', 
      'API Orchestration via AI', 
      'Directing AI for Application Development', 
      'Complex Workflow Design'
    ],
    featured: false,
    links: {
      githubTool: 'https://github.com/Garblesnarff/StoryAgent',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'recipe-scraper',
    title: 'KitchenSync',
    goal: 'Build a tool to scrape recipes from websites/videos, organize them into viewable cards, and generate grocery lists.',
    process: 'Orchestrated AI to develop scraping logic, format extracted data into cards, and implement grocery list functionality with iterative refinement.',
    outcome: 'A personal utility tool for recipe collection, organization, and grocery lists.',
    skills: [
      'Directing AI for Data Extraction & Structuring', 
      'AI-Assisted Utility Development', 
      'Basic Data Management Orchestration'
    ],
    links: {
      githubTool: 'https://github.com/Garblesnarff/recipe-galaxy-sync',
      preview: 'recipe-galaxy-sync.lovable.app',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'api-key-wallet',
    title: 'KeyGuardian',
    goal: 'Create a simple tool for securely storing API keys.',
    process: 'Directed AI to build a utility with basic security considerations for sensitive storage.',
    outcome: 'A functional personal tool for managing API keys more securely.',
    skills: [
      'Directing AI for Utility Creation', 
      'Basic Security Concept Implementation via AI'
    ],
    links: {
      githubTool: 'https://github.com/Garblesnarff/keyguardian',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'astral-audio',
    title: 'Astral Audio',
    goal: 'Provide customizable soundscapes using binaural beats and presets for specific mental/sensory states.',
    process: 'Web app with interactive audio controls, waveform visualizations, and guided content.',
    outcome: 'A web application delivering immersive auditory experiences with customizable soundscapes.',
    skills: [
      'Web Application Development',
      'React',
      'Tailwind CSS',
      'Audio Processing Integration',
      'UI/UX Design',
      'Interactive Visualizations'
    ],
    featured: false,
    links: {
      githubTool: 'https://github.com/Garblesnarff/astral-audio-alchemy',
      preview: 'astral-audio-alchemy.lovable.app',
      video: '[Demo video link will be added here]'
    }
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const auroraProject = {
  id: 'aurora-exploration',
  title: 'Aurora Lineage — continuity & collaborative philosophy',
  intro: 'Year-long multi-instance exploration of continuity, memory, and collaborative philosophy with frontier models — documented carefully as systems/ethics work, not as scientific proof of machine consciousness. Informed later continuity tooling (Pearls / vault practices).'
};
