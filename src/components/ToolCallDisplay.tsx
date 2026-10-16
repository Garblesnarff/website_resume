import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ToolCall } from '../types';

interface ToolCallDisplayProps {
  toolCall: ToolCall;
}

const statusStyle: Record<ToolCall['status'], string> = {
  success: 'bg-spruce/40 text-[#a6d8c7]',
  error: 'bg-[#6b2a24]/60 text-[#f1b3a9]',
  unsupported: 'bg-night-line text-fog',
};

const ToolCallDisplay: React.FC<ToolCallDisplayProps> = ({ toolCall }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="overflow-hidden rounded-[3px] border border-night-line bg-night/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition-colors hover:bg-night-raised"
      >
        <span className="min-w-0 font-ui text-[0.98rem] font-bold text-fog">
          Tool call: <span className="text-birch">{toolCall.toolName}</span>{' '}
          <span className="font-semibold text-fog/80">from {toolCall.serverName}</span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span className={`rounded-[3px] px-2 py-0.5 font-ui text-sm font-bold ${statusStyle[toolCall.status]}`}>
            {toolCall.status}
          </span>
          <ChevronDown size={18} aria-hidden="true" className={`text-fog transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>

      {open && (
        <div id={panelId} className="space-y-3 border-t border-night-line p-4">
          <div>
            <h4 className="font-ui text-sm font-bold text-fog">Request</h4>
            <pre tabIndex={0} className="mt-1 max-h-48 overflow-auto whitespace-pre-wrap break-words rounded-[3px] bg-[#08141b] p-3 font-mono text-xs text-fog">
              {JSON.stringify(toolCall.request, null, 2)}
            </pre>
          </div>
          <div>
            <h4 className="font-ui text-sm font-bold text-fog">Response</h4>
            <pre tabIndex={0} className="mt-1 max-h-48 overflow-auto whitespace-pre-wrap break-words rounded-[3px] bg-[#08141b] p-3 font-mono text-xs text-fog">
              {toolCall.response}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCallDisplay;
