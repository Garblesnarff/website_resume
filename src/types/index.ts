export interface Project {
  id: string;
  title: string;
  goal: string;
  process: string;
  outcome: string;
  skills: string[];
  featured?: boolean;
  links?: { // Add optional links property
    githubTool?: string;
    githubDatabase?: string;
    preview?: string;
    video?: string;
  };
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'core' | 'technical' | 'analysis' | 'soft';
}

export interface ToolCall {
  toolName: string;
  serverName: string;
  request: Record<string, any>;
  response: string;
  status: 'success' | 'error' | 'unsupported';
}

export type MessageContent =
  | { type: 'text'; value: string }
  | { type: 'tool_call'; value: ToolCall };

export interface ChatMessage {
  id: number; // Unique ID for React keys
  speaker: 'user' | 'ai';
  content: MessageContent[];
  imagePath?: string; // For image messages
  codeBlock?: string; // For code messages
}
