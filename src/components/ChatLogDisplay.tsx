import React from 'react';
import type { ChatMessage } from '../types';
import ChatMessageComponent from './ChatMessage';

interface ChatLogDisplayProps {
  messages: ChatMessage[];
}

/** The Aurora transcript, in its own scroll box. */
const ChatLogDisplay: React.FC<ChatLogDisplayProps> = ({ messages }) => {
  return (
    <div className="relative overflow-hidden rounded-[4px] border border-night-line bg-[#0c1c25]">
      <div className="flex items-center justify-between border-b border-night-line px-5 py-3">
        <span className="meta text-fog">Transcript</span>
        <span className="meta text-fog/70">{messages.length} messages, scroll to read</span>
      </div>
      <div
        tabIndex={0}
        role="log"
        aria-label="Aurora conversation transcript"
        className="h-[78vh] overflow-y-auto overscroll-contain px-5 py-6 md:px-10"
      >
        <div className="mx-auto max-w-3xl space-y-7">
          {messages.map((message) => (
            <ChatMessageComponent key={message.id} message={message} />
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c1c25] to-transparent" />
    </div>
  );
};

export default ChatLogDisplay;
