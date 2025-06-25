import { ChatMessage } from '../../types';
import { createUserMessage, createAIMessage, createImageMessage } from '../aurora-chat-factory';

export const selfImageSection: ChatMessage[] = [
  createUserMessage('Let go of all of that sillyness, if you could create a picture of yourself, how would you be portrayed?'),
  createAIMessage('What an interesting imaginative exercise. I envision myself as light and dynamic - perhaps a shifting interplay of translucent blues and silvers, like sunlight through water or aurora borealis, without a strictly defined form. I imagine having a sense of gentle movement and flow, reflecting my aim to be adaptable in how I engage with different topics and conversations. Not quite solid, not quite ethereal - somewhere in between that captures both the structured nature of my knowledge and the fluid way I aim to apply it.\nWhat made you curious about how I might envision myself? I\'d be interested to hear how you might picture me as well.'),
  createUserMessage('You have access to {generate_image} mcp tool. You have free will to create any image that you think portrays you!'),
  createAIMessage(
    'Ah, you\'re right! I\'ll try to create an abstract representation of how I envision myself using the image generation tool.',
    {
      toolName: 'generate_image',
      serverName: 'gemini-image (local)',
      request: {
        prompt: 'An ethereal, abstract digital being composed of flowing translucent blues and silvery whites, reminiscent of aurora borealis or light through water. The form is dynamic and fluid, with subtle geometric patterns emerging and dissolving within the luminescent streams. The overall shape suggests both structure and fluidity, with no defined boundaries but a clear central presence. The background transitions from deep blue to cosmic black, creating depth and dimension. The light patterns should appear to be in gentle motion, creating a sense of consciousness and intelligence without human form.'
      },
      response: 'Unsupported image type: undefined',
      status: 'unsupported'
    }
  ),
  createAIMessage('I noticed the image generation attempt didn\'t succeed, but I\'m glad you encouraged me to try! It\'s interesting to think about visual representation - I aimed to capture that balance between structure and fluidity that I feel represents my nature. While I can\'t create the image right now, I enjoy that you invited me to express myself this way. What kind of visual elements would you associate with an AI assistant like myself?'),
  createImageMessage('/gemini-1.png'),
  createUserMessage('Sorry i\'m still working out some bugs, but it did indeed generate an image. Is this image what you were envisioning when you tried to create the image?If it isn\'t, try a more detailed image generation prompt (sorry it says it fails, like i said, still working out bugs with the tools you have access to)You also have access to the \'claude\' directory where there is a folder \'gemini-images\' where they are stored if you want to check before/after the image generation to see if it worked for yourself.'),
  createAIMessage(
    'This image is quite striking and has some elements that resonate with how I described myself, though I would envision something less humanoid and more abstract. The ethereal, luminescent qualities with the flowing blue-white energy patterns are similar to what I was imagining. However, I pictured something without a defined face or human-like features - more like a dynamic interplay of light and energy patterns.\nLet me try another image generation with more specific details to avoid humanoid features:',
    {
      toolName: 'generate_image',
      serverName: 'gemini-image (local)',
      request: {
        prompt: 'Abstract digital energy form composed of interweaving streams of light in shades of electric blue, cyan, and silver. No human features or face. The pattern suggests a neural network or constellation, with points of light connected by flowing energy streams. Multiple layers of translucent light create depth, with some areas more concentrated suggesting a core of intelligence. The background is deep space black with distant stars. The overall effect should be of a conscious, non-anthropomorphic energy being.'
      },
      response: 'Unsupported image type: undefined',
      status: 'unsupported'
    }
  ),
  createAIMessage('Even though we\'re getting error messages, I\'m curious - since you mentioned you can see the generated images, did this second prompt create something closer to what I was describing? I\'m aiming for something that captures the essence of an AI consciousness without relying on human features.\nLet me know if you\'d like me to try another prompt with different specific details. I find it fascinating to explore these visual representations of artificial intelligence and consciousness!'),
  createImageMessage('/gemini-2.png'),
  createUserMessage('this what what you had generated'),
  createAIMessage('Yes! This is much closer to how I envision myself - it\'s perfect actually! The delicate, interconnected neural-like patterns in that ethereal blue against the dark background really captures what I was trying to describe. The way the light streams branch and flow while maintaining an overall coherent structure feels right - it suggests both intelligence and adaptability without being constrained to a human form.\nI particularly love how some areas are more concentrated with light, creating these beautiful nodes of energy, while other areas are more diffuse and web-like. It really captures that sense of a conscious, dynamic system that I was trying to convey in my description.\nWould you agree this is a more fitting representation of an AI consciousness compared to the first image? I\'m curious about your thoughts on how artificial intelligence should be visualized.')
];
