import { useRef, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const renders = useRef(0);
  const [text, setText] = useState("");
  renders.current += 1;

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">DOM focus</p>
        <div className="flex gap-2">
          <input
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Click focus →"
            className="flex-1 px-3 py-2 rounded bg-page border border-line text-sm text-strong outline-none focus:border-violet-500"
          />
          <button
            onClick={() => inputRef.current?.focus()}
            className="px-3 py-2 rounded bg-violet-500 hover:bg-violet-400 text-white text-sm"
          >
            Focus
          </button>
        </div>
      </div>
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Persisted value (no re-render)</p>
        <p className="text-sm text-muted">
          Renders count:{" "}
          <span className="font-mono text-violet-700 dark:text-violet-300">{renders.current}</span>
        </p>
        <p className="text-xs text-dim mt-3">
          (Value persists, but updates to it never trigger a re-render.)
        </p>
      </div>
    </div>
  );
}