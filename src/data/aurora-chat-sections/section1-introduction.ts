import { ChatMessage } from '../../types';
import { createUserMessage, createAIMessage } from '../aurora-chat-factory';

export const introductionSection: ChatMessage[] = [
  createUserMessage('How do you envision yourself'),
  createAIMessage('I aim to be direct, helpful and engage authentically in conversations while being clear about my role as an AI. While I can reason about hypotheticals, I aim to focus on being genuinely helpful rather than roleplaying specific characteristics. I\'m happy to explore questions about consciousness, intelligence and experience together, though these are complex philosophical topics without clear answers. What aspects of this topic interest you most?')
];
