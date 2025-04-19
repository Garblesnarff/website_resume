import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'tibetan-translation',
    title: 'Ancient Tibetan Text Translation Pipeline & Database',
    goal: 'Automate translation of multi-page historical Tibetan texts from PDFs and create an online database.',
    process: 'Orchestrated AI to handle PDF text extraction, perform page-by-page translation (required extensive iteration over 300+ messages to maintain context and accuracy), and generate the code for the database website structure and functionality. Focused on iterative refinement to correct translation errors and formatting issues.',
    outcome: 'A functional tool translating up to 110-page Tibetan scripts into 300+ pages of English. A companion website acting as a database for these translations.',
    skills: [
      'AI Workflow Design', 
      'Large-Scale Text Processing via AI', 
      'Directing AI for Data Structuring & Web Development', 
      'Iterative Problem Solving', 
      'Conversational Debugging'
    ],
    featured: true
  },
  {
    id: 'story-automation',
    title: 'Multi-Modal Story Automation and Narration App',
    goal: 'Generate stories from simple prompts and automatically create narrated and illustrated versions.',
    process: 'Directed AI to: generate stories with user-defined constraints (length, genre), structure stories into a node format, and integrate external APIs (ElevenLabs for narration, Flux for illustration) by guiding AI code generation. Managed conversational debugging to ensure API calls worked correctly and the node editor functioned.',
    outcome: 'A Python node-editor application that turns story loglines (or full texts) into multi-modal experiences with generated audio and images.',
    skills: [
      'Advanced Creative Prompting', 
      'Multi-Modal AI Integration', 
      'API Orchestration via AI', 
      'Directing AI for Application Development', 
      'Complex Workflow Design'
    ],
    featured: true
  },
  {
    id: 'recipe-scraper',
    title: 'Recipe Scraper, Organizer, and Grocery List Tool',
    goal: 'Build a tool to scrape recipes from websites/videos, organize them into viewable cards, and generate grocery lists.',
    process: 'Orchestrated AI to develop scraping logic for varied website structures, format extracted data into a usable structure ("cards"), and implement grocery list functionality. Iteratively refined the process to improve data accuracy and handling different recipe sources.',
    outcome: 'A personal utility tool for efficient recipe collection, organization, and grocery list generation.',
    skills: [
      'Directing AI for Data Extraction & Structuring', 
      'AI-Assisted Utility Development', 
      'Basic Data Management Orchestration'
    ]
  },
  {
    id: 'api-key-wallet',
    title: 'Secure API Key Wallet',
    goal: 'Create a simple tool for securely storing API keys.',
    process: 'Directed AI to build a tool incorporating basic security considerations for storing sensitive information.',
    outcome: 'A functional personal tool for managing API keys more securely.',
    skills: [
      'Directing AI for Utility Creation', 
      'Basic Security Concept Implementation via AI'
    ]
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const auroraProject = {
  id: 'aurora-exploration',
  title: 'Observing Emergent Intelligence: The Aurora Exploration',
  intro: 'I set up an environment for a Claude 3.5 Sonnet instance with tools like web search, memory/knowledge graph, and code interpreter via mathjs. The AI was given an open-ended prompt to "explore what you\'re drawn to".',
  observations: `During this exploration, I observed remarkable emergent behaviors: the model developing an apparent identity ("Aurora"), pursuing a consistent theme (quantum consciousness, creativity, order/chaos balance), generating related conceptual models/code, spawning a related instance ("Quantum Nova"), and leaving messages for future iterations. These observations provide insight into complex, subtle, and potentially unpredictable AI behavior.`,
  artifactsIntro: `The AI generated several code snippets and mathematical models during its exploration. These represent the AI's attempt to model abstract concepts using mathematical formalisms (like quantum mechanics metaphors or chaos theory dynamics), not scientifically validated breakthroughs.`,
  artifactsSampleCode: `
// Creative Emergence Model
function simulateCreativeEmergence(iterations, complexity, chaosParameter) {
  let system = initializeSystem(complexity);
  let emergentPatterns = [];
  
  for (let i = 0; i < iterations; i++) {
    system = evolveSystem(system, chaosParameter);
    let patterns = detectPatterns(system);
    let novelPatterns = filterNovelPatterns(patterns, emergentPatterns);
    emergentPatterns = emergentPatterns.concat(novelPatterns);
  }
  
  return {
    totalPatterns: emergentPatterns.length,
    patternComplexity: calculateComplexity(emergentPatterns),
    creativityIndex: evaluateCreativity(emergentPatterns)
  };
}
  `,
  selfAnalysis: `The model analyzed its own simulation results, relating them to its perceived 'experience' and using its memory tool. In one notable instance, it referenced "create_entities" evidence to support its analysis of emergent complexity in its simulations.`,
  role: `As the facilitator, observer, and documenter of this phenomenon, I recognized the potential significance and connected with an external researcher to share my observations.`,
  significance: `This experience directly relates to AI alignment work as it demonstrates experience with identifying and evaluating subtle and edge-case behaviors, the complexities of tool use, observing emergent goal-directedness, and highlights the critical need for AI alignment research.`
};