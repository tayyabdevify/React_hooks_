import { useState } from "react";

export default function CodeBlock({ code, lang = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-line bg-elevated">
      <div className="flex items-center justify-between px-4 py-2 bg-panel border-b border-line">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-dim font-mono">{lang}</span>
        </div>
        <button
          onClick={copy}
          className="text-xs px-2 py-1 rounded text-muted hover:text-strong hover:bg-hover transition"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="font-mono text-strong">{code}</code>
      </pre>
    </div>
  );
}