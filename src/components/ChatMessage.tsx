import React from 'react';
import type { ChatMessage } from '../types';

interface ChatMessageProps {
  message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.speaker === 'user';
  const isImage = message.speaker === 'image';
  const isCode = message.speaker === 'code';

  // Function to process text and format pasted content
  const processText = (text: string) => {
    if (!text) return '';
    
    // Check if text contains pasted content
    if (text.includes('<pasted_content>') && text.includes('</pasted_content>')) {
      // Split text into parts (before, pasted content, and after)
      const parts = text.split(/<pasted_content>|<\/pasted_content>/);
      return (
        <>
          {parts[0] && <p className="mb-2">{parts[0]}</p>}
          {parts[1] && (
            <div className="p-4 bg-white border-2 border-gray-400 rounded text-sm my-2 overflow-auto max-h-96 text-gray-900 shadow-md">
              <pre className="whitespace-pre-wrap font-sans">{parts[1]}</pre>
            </div>
          )}
          {parts[2] && <p className="mt-2">{parts[2]}</p>}
        </>
      );
    }
    
    return <p className="text-sm overflow-wrap-anywhere">{text}</p>;
  };

  if (isImage && message.imagePath) {
    return (
      <div className="w-full flex justify-center py-4 animate-fade-in">
        <img 
          src={message.imagePath} 
          alt="Generated visual representation" 
          className="rounded-lg shadow-lg max-w-md max-h-96 object-contain"
        />
      </div>
    );
  }

  if (isCode && message.codeBlock) {
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
        {message.text && processText(message.text)}
        {message.toolUsage && (
          <div className="mt-2 p-2 text-xs bg-gray-700 text-gray-200 rounded">
            <strong>Tool Used:</strong> {message.toolUsage.toolName} from {message.toolUsage.serverName}
            {message.toolUsage.params && (
              <div>
                <strong>Params:</strong> {JSON.stringify(message.toolUsage.params, null, 2)}
              </div>
            )}
            <strong>Result:</strong> {message.toolUsage.result}
            {message.toolUsage.status && (
              <div>
                <strong>Status:</strong> {message.toolUsage.status}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatMessage;
