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

interface ToolUsage {
  toolName: string;
  serverName: string;
  params?: Record<string, any>; // Optional params
  result: string; // The text result shown
  status?: 'success' | 'error' | 'unsupported'; // Optional status
}

export interface ChatMessage {
  id: number; // Unique ID for React keys
  speaker: 'user' | 'ai' | 'image' | 'code';
  text?: string;
  imagePath?: string;
  codeBlock?: string;
  toolUsage?: ToolUsage; // Optional tool usage details
}
