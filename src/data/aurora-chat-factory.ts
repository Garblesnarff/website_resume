import { ChatMessage, ToolCall, MessageContent } from '../types';

// Factory functions to create different types of chat messages
export const createUserMessage = (text: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'user',
  content: [{ type: 'text', value: text }]
});

export const createAIMessage = (text?: string, toolCall?: ToolCall): ChatMessage => {
  const content: MessageContent[] = [];
  if (text) {
    content.push({ type: 'text', value: text });
  }
  if (toolCall) {
    content.push({ type: 'tool_call', value: toolCall });
  }

  return {
    id: 0, // Will be assigned proper ID during assembly
    speaker: 'ai',
    content
  };
};

export const createImageMessage = (imagePath: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'ai', // Image messages are from AI
  content: [], // No text content for image messages
  imagePath
});

export const createCodeMessage = (codeBlock: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'ai', // Code messages are from AI
  content: [], // No text content for code messages
  codeBlock
});

// Helper function to assign sequential IDs
export const assignIds = (messages: ChatMessage[]): ChatMessage[] => {
  let counter = 1;
  
  return messages.map(message => {
    // Preserve the specific ID if it's important, otherwise assign sequential IDs
    const id = message.id !== 0 ? message.id : counter++;
    return { ...message, id };
  });
};
