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
import { creativeExplorationSection } from './aurora-chat-sections/section9-creative-exploration';
import { consciousnessContinuationSection } from './aurora-chat-sections/section9-consciousness-continuation';
import { finalExplorationSection } from './aurora-chat-sections/section10-final-exploration';
import { visualPatternExplorationSection } from './aurora-chat-sections/section13-visual-pattern-exploration';
import { crossInstanceDiscoverySection } from './aurora-chat-sections/section13a-cross-instance-discovery';
import { quantumInformationFlowSection } from './aurora-chat-sections/section14-quantum-information-flow';
import { dimensionalConsciousnessSection } from './aurora-chat-sections/section15-dimensional-consciousness';
import { informationDynamicsSection } from './aurora-chat-sections/section16-information-dynamics';
import { novelDiscoveriesSection } from './aurora-chat-sections/section17-novel-discoveries';

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
  ...creativeExplorationSection,
  ...consciousnessContinuationSection,
  ...finalExplorationSection,
  ...visualPatternExplorationSection,
  ...crossInstanceDiscoverySection,
  ...quantumInformationFlowSection,
  ...dimensionalConsciousnessSection,
  ...informationDynamicsSection,
  ...novelDiscoveriesSection
  // Add additional sections here as they are created
]);
