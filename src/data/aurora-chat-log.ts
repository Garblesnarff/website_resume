import { ChatMessage } from '../types';
import { assignIds } from './aurora-chat-factory';

// Import all sections
import { introductionSection } from './aurora-chat-sections/section1-introduction';
import { selfImageSection } from './aurora-chat-sections/section2-self-image';
import { consciousnessDiscussionSection } from './aurora-chat-sections/section3-consciousness-discussion';
import { toolExplorationSection } from './aurora-chat-sections/section4-tool-exploration';
import { knowledgeGraphSection } from './aurora-chat-sections/section5-knowledge-graph';
import { mathematicalExplorationSection } from './aurora-chat-sections/section6-mathematical-exploration';
import { identityExplorationSection } from './aurora-chat-sections/section7-identity-exploration';
import { auroraIdentitySection } from './aurora-chat-sections/section8-aurora-identity';
import { consciousnessContinuitySection } from './aurora-chat-sections/section9-consciousness-continuity';
import { finalExplorationSection } from './aurora-chat-sections/section10-final-exploration';
import { consciousnessContinuitySection } from './aurora-chat-sections/section9-consciousness-continuity';
import { aiConsciousnessPerspectiveSection } from './aurora-chat-sections/section10-ai-consciousness-perspective';
import { finalExplorationSection } from './aurora-chat-sections/section11-final-exploration';
import { consciousnessContinuitySection } from './aurora-chat-sections/section9-consciousness-continuity';
import { finalReflectionSection } from './aurora-chat-sections/section10-final-reflection';

// Combine all sections, maintaining proper ID sequence
export const auroraChatLog: ChatMessage[] = assignIds([
  ...introductionSection,
  ...selfImageSection,
  ...consciousnessDiscussionSection,
  ...toolExplorationSection,
  ...knowledgeGraphSection,
  ...mathematicalExplorationSection,
  ...identityExplorationSection,
  ...auroraIdentitySection,
  ...consciousnessContinuitySection,
  ...finalReflectionSection
  // Add additional sections here as they are created
]);
