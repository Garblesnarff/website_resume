import React from 'react';
import type { ChatMessage } from '../types';

interface ChatMessageProps {
  message: ChatMessage;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.speaker === 'user';
  const isImage = message.speaker === 'image';

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

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div
        className={`rounded-lg p-3 max-w-md ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.text && <p className="text-sm overflow-wrap-anywhere">{message.text}</p>}
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
