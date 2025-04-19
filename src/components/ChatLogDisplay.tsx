import React from 'react';
import type { ChatMessage } from '../types';
import ChatMessageComponent from './ChatMessage';

interface ChatLogDisplayProps {
  messages: ChatMessage[];
}

const ChatLogDisplay: React.FC<ChatLogDisplayProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 h-[80vh] overflow-y-auto p-4 bg-gray-50 rounded-lg shadow-inner">
      {messages.map((message) => (
        <ChatMessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatLogDisplay;
