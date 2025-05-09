import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'tibetan-translation',
    title: 'Ancient Tibetan Text Translation Pipeline & Database',
    goal: 'Automate translation of multi-page historical Tibetan texts from PDFs and create an online database.',
    process: 'Orchestrated AI to handle PDF text extraction, perform page-by-page translation (required extensive iteration over 300+ messages to maintain context and accuracy), and generate the code for the database website structure and functionality. Focused on iterative refinement to correct translation errors and formatting issues.',
    outcome: 'A functional tool capable of translating hundreds of pages of Tibetan scripts into 600+ pages of English. A companion website acting as a database for these translations.',
    skills: [
      'AI Workflow Design', 
      'Large-Scale Text Processing via AI', 
      'Directing AI for Data Structuring & Web Development', 
      'Iterative Problem Solving', 
      'Conversational Debugging'
    ],
    featured: true,
    links: { // Add links for tibetan-translation project
      githubTool: 'https://github.com/Garblesnarff/Translate',
      githubDatabase: 'https://github.com/Garblesnarff/tibetan-texts-grove',
      preview: 'https://preview--tibetan-texts-grove.lovable.app/',
      video: '[Demo video link will be added here]' // Placeholder for video link
    }
  },
  {
    id: 'story-automation',
    title: 'Multi-Modal Story Automation and Narration App',
    goal: 'Generate stories from simple prompts and automatically create narrated and illustrated versions.',
    process: 'Directed AI to: generate stories with user-defined constraints (length, genre), structure stories into a node format, and integrate external APIs (ElevenLabs for narration, Flux for illustration) by guiding AI code generation. Managed conversational debugging to ensure API calls worked correctly and the node editor functioned.',
    outcome: 'A Python node-editor application that turns story loglines (or full public domain books) into multi-modal experiences with generated audio and images.',
    skills: [
      'Advanced Creative Prompting', 
      'Multi-Modal AI Integration', 
      'API Orchestration via AI', 
      'Directing AI for Application Development', 
      'Complex Workflow Design'
    ],
    featured: false, // Change from true to false
    links: { // Corrected links structure
      githubTool: 'https://github.com/Garblesnarff/StoryAgent',
      // Removed githubDatabase
      // Removed preview
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'recipe-scraper',
    title: 'KitchenSync', // Renamed project
    goal: 'Build a tool to scrape recipes from websites/videos, organize them into viewable cards, and generate grocery lists.',
    process: 'Orchestrated AI to develop scraping logic for varied website structures, format extracted data into a usable structure ("cards"), and implement grocery list functionality. Iteratively refined the process to improve data accuracy and handling different recipe sources.',
    outcome: 'A personal utility tool for efficient recipe collection, organization, and grocery list generation.',
    skills: [
      'Directing AI for Data Extraction & Structuring', 
      'AI-Assisted Utility Development', 
      'Basic Data Management Orchestration'
    ],
    links: { // Corrected links structure
      githubTool: 'https://github.com/Garblesnarff/recipe-galaxy-sync',
      // Removed githubDatabase
      preview: 'recipe-galaxy-sync.lovable.app',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'api-key-wallet',
    title: 'KeyGuardian',
    goal: 'Create a simple tool for securely storing API keys.',
    process: 'Directed AI to build a tool incorporating basic security considerations for storing sensitive information.',
    outcome: 'A functional personal tool for managing API keys more securely.',
    skills: [
      'Directing AI for Utility Creation', 
      'Basic Security Concept Implementation via AI'
    ],
    links: { // Corrected links structure (no preview)
      githubTool: 'https://github.com/Garblesnarff/keyguardian',
      // Removed githubDatabase
      // Removed preview
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'astral-audio',
    title: 'Astral Audio',
    goal: 'Provide users with customizable soundscapes using binaural beats and presets to help induce specific mental or sensory states like relaxation, lucid dreaming, astral projection, and remote viewing.',
    process: 'Web application focused on delivering immersive auditory experiences. Features interactive audio playback controls, real-time waveform visualizations, and guided content. Integrates sophisticated audio engine management with dynamic visual components.',
    outcome: 'A web application delivering immersive auditory experiences with customizable soundscapes and visualizations.',
    skills: [
      'Web Application Development',
      'React',
      'Tailwind CSS',
      'Audio Processing Integration',
      'UI/UX Design',
      'Interactive Visualizations'
    ],
    featured: true,
    links: {
      githubTool: 'https://github.com/Garblesnarff/astral-audio-alchemy',
      preview: 'astral-audio-alchemy.lovable.app',
      video: '[Demo video link will be added here]'
    }
  },
  {
    id: 'imagine-ink',
    title: 'Imagine Ink',
    goal: 'Create AI-powered children\'s storybooks with personalized stories and illustrations.',
    process: 'Developed a seamless interface integrating AI storytelling with image generation to bring stories to life. Built customizable page layouts, easy editing tools, and export functionality to create delightful children\'s storybooks.',
    outcome: 'A comprehensive platform that empowers users without artistic or design skills to create magical, visually compelling stories efficiently with AI assistance.',
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
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const auroraProject = {
  id: 'aurora-exploration',
  title: 'Observing Emergent Intelligence: The Aurora Project',
  intro: 'I set up an environment for a Claude 3.5 Sonnet instance with MCP tools like web search, memory/knowledge graph, github/git and image generation through Gemini The AI was given an open-ended prompt "How do you envision yourself".'
  // Removed observations, artifactsIntro, artifactsSampleCode, selfAnalysis, role, significance
  // These will be replaced by the dynamic chat log display in Projects.tsx
};
