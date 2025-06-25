import React from 'react';
import type { ChatMessage, MessageContent } from '../types';
import { getChatImagePath } from '../config';
import ToolCallDisplay from './ToolCallDisplay'; // Import the new component

interface ChatMessageProps {
  message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.speaker === 'user';

  // Function to process text and format pasted content
  const processText = (text: string) => {
    if (!text) return null;

    // Check if text contains pasted content
    if (text.includes('<pasted_content>') && text.includes('</pasted_content>')) {
      // Split text into parts (before, pasted content, and after)
      const parts = text.split(/<pasted_content>|<\/pasted_content>/);
      return (
        <>
          {parts[0] && <p className="mb-2 text-sm overflow-wrap-anywhere">{parts[0]}</p>}
          {parts[1] && (
            <div className="p-4 bg-white border-2 border-gray-400 rounded text-sm my-2 overflow-auto max-h-96 text-gray-900 shadow-md">
              <pre className="whitespace-pre-wrap font-sans">{parts[1]}</pre>
            </div>
          )}
          {parts[2] && <p className="mt-2 text-sm overflow-wrap-anywhere">{parts[2]}</p>}
        </>
      );
    }

    return <p className="text-sm overflow-wrap-anywhere">{text}</p>;
  };

  // Render image messages
  if (message.imagePath) {
    return (
      <div className="w-full flex justify-center py-4 animate-fade-in">
        <img
          src={getChatImagePath(message.imagePath)}
          alt="Generated visual representation"
          className="rounded-lg shadow-lg max-w-md max-h-96 object-contain"
        />
      </div>
    );
  }

  // Render code messages
  if (message.codeBlock) {
    return (
      <div className="w-full my-4 animate-fade-in">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg overflow-auto max-h-96">
          <pre className="whitespace-pre-wrap break-words text-sm font-mono">{message.codeBlock}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div
        className={`rounded-lg p-3 max-w-md ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.content.map((block: MessageContent, index: number) => (
          <React.Fragment key={index}>
            {block.type === 'text' && processText(block.value)}
            {block.type === 'tool_call' && <ToolCallDisplay toolCall={block.value} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;
