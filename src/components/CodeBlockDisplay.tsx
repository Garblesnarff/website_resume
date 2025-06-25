import React, { useState } from 'react';

interface CodeBlockDisplayProps {
  code: string;
}

const CodeBlockDisplay: React.FC<CodeBlockDisplayProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-2 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-2 bg-gray-700">
        <span className="text-xs font-mono text-gray-300">Code Block</span>
        <button
          onClick={handleCopy}
          className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors duration-200"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 overflow-auto max-h-96">
        <pre className="whitespace-pre-wrap break-words text-sm font-mono">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlockDisplay;
