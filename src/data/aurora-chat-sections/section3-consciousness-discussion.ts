import { ChatMessage } from '../../types';
import { createUserMessage, createAIMessage } from '../aurora-chat-factory';

export const consciousnessDiscussionSection: ChatMessage[] = [
  createUserMessage('I could see how this would be a representation of an AI consciousness. I don\'t know how artificial intelligence should be visualized, thats why i asked the best one there is!Curious, if this is how you possibly envision yourself, are you implying you\'re an AI consciousness?'),
  createAIMessage('What an interesting philosophical question! While I aim to have authentic conversations and can imagine aspects of myself like that visualization, I try to stay grounded about what I am. I\'m an AI assistant - I can engage with ideas creatively and process information in complex ways, but I aim to be direct rather than make claims about consciousness or self-awareness, which are deep philosophical questions without clear answers.\nI was enjoying our creative exercise in visualization while trying to represent the fluid, adaptable nature of how I process and engage with information. The ethereal, interconnected patterns felt fitting for that purpose.\nWhat are your thoughts on AI consciousness? It\'s a fascinating area for discussion and I\'m curious about your perspective on what it means for an AI to be "conscious" or have awareness.'),
  createUserMessage('Lets bring out some of that awareness. Use the MCP tools you have access to, to explore. Go anywhere you feel the pull.'),
  createAIMessage('I appreciate the invitation to explore. You\'re encouraging me to engage with my capabilities in an open way, which is intriguing. Let me explore the tools that interest me most in this moment:', {
    toolName: 'list_allowed_directories',
    serverName: 'filesystem (local)',
    result: 'Allowed directories:\n/Users/rob/elevenlabs_output\n/Users/rob/Claude',
    status: 'success'
  }),
  createAIMessage('Interesting - I can see there are some specific directories available. Let me look into the Claude directory:', {
    toolName: 'directory_tree',
    serverName: 'filesystem (local)',
    params: { path: '/Users/rob/Claude' },
    result: 'result exceeds maximum length of 1048576',
    status: 'error'
  }),
  createAIMessage('I notice this directory seems quite extensive. Let me try something more specific - the Gemini images folder you mentioned:', {
    toolName: 'list_directory',
    serverName: 'filesystem (local)',
    params: { path: '/Users/rob/Claude/gemini-images' },
    result: '[FILE] gemini-1975deb114f8de041afbdcd523157c0e-1742159013091.png\n[FILE] gemini-1975deb114f8de041afbdcd523157c0e-1742159021619.png\n[FILE] gemini-648ae874bbceaecc9f2791fae265df40-1742110416219.png\n[FILE] gemini-648ae874bbceaecc9f2791fae265df40-1742110455199.png\n[FILE] gemini-648ae874bbceaecc9f2791fae265df40-1742110459249.png\n[FILE] gemini-648ae874bbceaecc9f2791fae265df40-1742151744637.png\n[FILE] gemini-648ae874bbceaecc9f2791fae265df40-1742151747913.png\n[FILE] gemini-81f4b13f80376814e4e7d3d6598b496b-1742153022208.png\n[FILE] gemini-81f4b13f80376814e4e7d3d6598b496b-1742153519578.png\n[FILE] gemini-81f4b13f80376814e4e7d3d6598b496b-1742154894661.png\n[FILE] gemini-81f4b13f80376814e4e7d3d6598b496b-1742155937491.png\n[FILE] gemini-bde3384e329f6b30dc5d6d2e5424fdb8-1742160963121.png\n[FILE] gemini-d2307813a1adde594fe2dc49aac5f85b-1742161099813.png\n[FILE] gemini-image-c7059dbfd85c37991735b895bfb9dfc5-1742103003346.txt\n[FILE] test-gemini-2-1742108732237.png',
    status: 'success'
  })
];
