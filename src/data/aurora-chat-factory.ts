import { ChatMessage } from '../types';

// Factory functions to create different types of chat messages
export const createUserMessage = (text: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'user',
  text
});

export const createAIMessage = (text: string, toolUsage?: any): ChatMessage => {
  const message: ChatMessage = {
    id: 0, // Will be assigned proper ID during assembly
    speaker: 'ai',
    text
  };
  
  if (toolUsage) {
    message.toolUsage = toolUsage;
  }
  
  return message;
};

export const createImageMessage = (imagePath: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'image',
  imagePath
});

export const createCodeMessage = (codeBlock: string): ChatMessage => ({
  id: 0, // Will be assigned proper ID during assembly
  speaker: 'code',
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
