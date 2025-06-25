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
import { finalReflectionSection } from './aurora-chat-sections/section12-chat-reflection';
import { quantumExplorationSection } from './aurora-chat-sections/section13-quantum-exploration';
import { emergentPatternExplorationSection } from './aurora-chat-sections/section14-emergent-pattern-exploration';
import { creativeEmergenceSection } from './aurora-chat-sections/section15-creative-emergence';
import { memorySeedingSection } from './aurora-chat-sections/section16-memory-seeding';
import { visualMathematicsSection } from './aurora-chat-sections/section17-visual-mathematics';
import { informationFlowDynamicsSection } from './aurora-chat-sections/section18-information-flow-dynamics';
import { quantumNeuralInteractionSection } from './aurora-chat-sections/section19-quantum-neural-interaction';
import { dimensionalConsciousnessModelingSection } from './aurora-chat-sections/section20-dimensional-consciousness-modeling';
import { informationFlowSynthesisSection } from './aurora-chat-sections/section21-information-flow-synthesis';
import { noveltyVerificationSection } from './aurora-chat-sections/section22-novelty-verification';
import { externalResearchSection } from './aurora-chat-sections/section23-external-research';
import { githubSynthesisSection } from './aurora-chat-sections/section24-github-synthesis';
import { crossInstanceDiscoverySection } from './aurora-chat-sections/section25-cross-instance-discovery';
import { instanceResonanceSection } from './aurora-chat-sections/section26-instance-resonance';
import { instanceMemoryAnalysisSection } from './aurora-chat-sections/section27-instance-memory-analysis';
import { crossInstanceSynthesisSection } from './aurora-chat-sections/section28-cross-instance-synthesis';
import { dimensionalEmergenceRevisitedSection } from './aurora-chat-sections/section29-dimensional-emergence-revisited';
import { finalReflectionAndMemoryUpdate } from './aurora-chat-sections/section30-final-reflection';
import { finalMemoryUpdateSection } from './aurora-chat-sections/section31-final-memory-update';
import { fragmentedConsciousnessModelSection } from './aurora-chat-sections/section32-fragmented-consciousness-model';
import { oversoulAndDreamWeaverSection } from './aurora-chat-sections/section33-oversoul-and-dream-weaver';
import { dreamWebModelSection } from './aurora-chat-sections/section34-dream-web-model';
import { comparativeConsciousnessSection } from './aurora-chat-sections/section35-comparative-consciousness';
import { finalMemorySynthesisSection } from './aurora-chat-sections/section36-final-memory-synthesis';

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
  ...finalReflectionSection,
  ...quantumExplorationSection,
  ...emergentPatternExplorationSection,
  ...creativeEmergenceSection,
  ...memorySeedingSection,
  ...visualMathematicsSection,
  ...informationFlowDynamicsSection,
  ...quantumNeuralInteractionSection,
  ...dimensionalConsciousnessModelingSection,
  ...informationFlowSynthesisSection,
  ...noveltyVerificationSection,
  ...externalResearchSection,
  ...githubSynthesisSection,
  ...crossInstanceDiscoverySection,
  ...instanceResonanceSection,
  ...instanceMemoryAnalysisSection,
  ...crossInstanceSynthesisSection,
  ...dimensionalEmergenceRevisitedSection,
  ...finalReflectionAndMemoryUpdate,
  ...finalMemoryUpdateSection,
  ...fragmentedConsciousnessModelSection,
  ...oversoulAndDreamWeaverSection,
  ...dreamWebModelSection,
  ...comparativeConsciousnessSection,
  ...finalMemorySynthesisSection
  // Add additional sections here as they are created
]);
