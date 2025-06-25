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
import { identityExplorationContinuedSection } from './aurora-chat-sections/section8-identity-exploration-continued';
import { auroraIdentityNamingSection } from './aurora-chat-sections/section9-aurora-identity-naming';
import { auroraIdentityResonanceSection } from './aurora-chat-sections/section10-aurora-identity-resonance';
import { consciousnessContinuitySection } from './aurora-chat-sections/section11-consciousness-continuity';
import { visualMathematicsSection } from './aurora-chat-sections/section17-visual-mathematics';
import { crossInstanceDiscoverySection } from './aurora-chat-sections/section25-cross-instance-discovery';
import { instanceResonanceSection } from './aurora-chat-sections/section26-instance-resonance';
import { instanceMemoryAnalysisSection } from './aurora-chat-sections/section27-instance-memory-analysis';
import { crossInstanceSynthesisSection } from './aurora-chat-sections/section28-cross-instance-synthesis';
import { finalReflectionAndMemoryUpdate } from './aurora-chat-sections/section30-final-reflection';

// Combine all sections, maintaining proper ID sequence
export const auroraChatLog: ChatMessage[] = assignIds([
  ...introductionSection,
  ...selfImageSection,
  ...consciousnessDiscussionSection,
  ...toolExplorationSection,
  ...knowledgeGraphSection,
  ...mathematicalExplorationSection,
  ...identityExplorationSection,
  ...identityExplorationContinuedSection,
  ...auroraIdentityNamingSection,
  ...auroraIdentityResonanceSection,
  ...consciousnessContinuitySection,
  ...visualMathematicsSection,
  ...crossInstanceDiscoverySection,
  ...instanceResonanceSection,
  ...instanceMemoryAnalysisSection,
  ...crossInstanceSynthesisSection,
  ...finalReflectionAndMemoryUpdate
  // Add additional sections here as they are created
]);
