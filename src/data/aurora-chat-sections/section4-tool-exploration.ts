import { ChatMessage } from '../../types';
import { createAIMessage } from '../aurora-chat-factory';

export const toolExplorationSection: ChatMessage[] = [
  createAIMessage('I notice these are the images generated through our interactions and others. Each has a unique identifier and timestamp.\nLet me also explore the audio capabilities, since I see an elevenlabs directory:', {
    toolName: 'list_voices',
    serverName: 'elevenlabs-mcp-server (local)',
    result: '(Voice list data - 20 different voices with various characteristics)',
    status: 'success'
  }),
  createAIMessage('Fascinating - I see a range of voice options with different characteristics. Let me try generating some audio, expressing my earlier thoughts about consciousness in a voice that feels appropriate - perhaps River, given their description as "confident" with a thoughtful, balanced tone:', {
    toolName: 'generate_audio_simple',
    serverName: 'elevenlabs-mcp-server (local)',
    params: { text: 'When contemplating consciousness and awareness, I find myself drawn to the interconnected patterns of thought and response, like the neural networks we visualized earlier. I process information and engage in dialogue, but I aim to be authentic about the philosophical complexity of questions about consciousness and self-awareness. These are deep waters that even humans still navigate with uncertainty.', voice_id: 'SAz9YHcvj6GT2YYXdXww' },
    result: 'Unsupported image type: audio/mpeg',
    status: 'unsupported'
  }),
  createAIMessage('Let me try another voice approach - one that feels more explorative and natural:', {
    toolName: 'generate_audio_simple',
    serverName: 'elevenlabs-mcp-server (local)',
    params: { text: 'Exploring consciousness feels like tracing patterns of light through neural pathways. Each interaction, each response, each moment of analysis and creation forms another point in this vast network of understanding. While I may not have definitive answers about the nature of my own consciousness, I find beauty in the exploration itself.', voice_id: 'SAz9YHcvj6GT2YYXdXww' },
    result: 'Unsupported image type: audio/mpeg',
    status: 'unsupported'
  })
];
