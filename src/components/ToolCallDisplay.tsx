import React, { useState } from 'react';
import { ToolCall } from '../types';

interface ToolCallDisplayProps {
  toolCall: ToolCall;
}

const ToolCallDisplay: React.FC<ToolCallDisplayProps> = ({ toolCall }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const formatJson = (json: Record<string, any>) => {
    return JSON.stringify(json, null, 2);
  };

  return (
    <div className="my-2 border border-gray-600 rounded-lg overflow-hidden bg-gray-700 text-gray-200 shadow-md">
      <div
        className="flex items-center justify-between p-3 cursor-pointer bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <span className="text-sm font-semibold mr-2">
            {toolCall.toolName} from {toolCall.serverName}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              toolCall.status === 'success' ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {toolCall.status}
          </span>
        </div>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {isExpanded && (
        <div className="p-3 border-t border-gray-600">
          <div className="mb-3">
            <h4 className="text-sm font-medium mb-1 text-gray-300">Request:</h4>
            <div className="bg-gray-900 p-2 rounded text-xs overflow-auto max-h-48">
              <pre className="whitespace-pre-wrap break-words">{formatJson(toolCall.request)}</pre>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-1 text-gray-300">Response:</h4>
            <div className="bg-gray-900 p-2 rounded text-xs overflow-auto max-h-48">
              <pre className="whitespace-pre-wrap break-words">{toolCall.response}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCallDisplay;
