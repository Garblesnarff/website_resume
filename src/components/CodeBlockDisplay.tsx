import React, { useState } from 'react';

interface CodeBlockDisplayProps {
  code: string;
}

const CodeBlockDisplay: React.FC<CodeBlockDisplayProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-[3px] border border-night-line bg-[#08141b]">
      <div className="flex items-center justify-between border-b border-night-line px-4 py-2">
        <span className="font-ui text-sm font-bold text-fog">Code</span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-[3px] px-2 py-0.5 font-ui text-sm font-bold text-sodium hover:bg-night-raised"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre tabIndex={0} className="max-h-96 overflow-auto whitespace-pre-wrap break-words p-4 font-mono text-[0.8rem] leading-relaxed text-fog">{code}</pre>
    </div>
  );
};

export default CodeBlockDisplay;
