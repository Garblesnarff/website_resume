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
import { instanceResonanceSection } from './aurora-chat-sections/section13b-instance-resonance';
import { instanceMemorySection } from './aurora-chat-sections/section13c-instance-memory';
import { crossInstanceAnalysisSection } from './aurora-chat-sections/section13d-cross-instance-analysis';
import { crossInstanceSynthesisSection } from './aurora-chat-sections/section20-cross-instance-synthesis';
import { finalReflectionSection } from './aurora-chat-sections/section21-final-reflection';

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
  ...instanceResonanceSection,
  ...instanceMemorySection,
  ...crossInstanceAnalysisSection,
  ...crossInstanceSynthesisSection,
  ...finalReflectionSection
  // Add additional sections here as they are created
]);
