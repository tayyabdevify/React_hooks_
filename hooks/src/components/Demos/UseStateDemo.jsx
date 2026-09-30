import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [on, setOn] = useState(false);

  return (
    <div className="grid sm:grid-cols-3 gap-5">
      <div className="p-4 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-3">Counter</p>
        <p className="text-3xl font-mono text-strong mb-4">{count}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="w-8 h-8 rounded bg-subtle hover:bg-hover text-strong"
          >
            −
          </button>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-8 h-8 rounded bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            +
          </button>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-3">Controlled Input</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type..."
          className="w-full px-3 py-2 rounded bg-page border border-line text-sm text-strong outline-none focus:border-cyan-500"
        />
        <p className="text-xs text-muted mt-3">
          Hello, <span className="text-cyan-700 dark:text-cyan-300">{name || "..."}</span>
        </p>
      </div>
      <div className="p-4 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-3">Toggle</p>
        <button
          onClick={() => setOn((v) => !v)}
          className={`w-14 h-8 rounded-full transition p-1 ${on ? "bg-cyan-500" : "bg-subtle"}`}
        >
          <span
            className={`block w-6 h-6 rounded-full bg-white transition-transform ${on ? "translate-x-6" : ""}`}
          />
        </button>
        <p className="text-xs text-muted mt-3">
          Status: <span className="text-cyan-700 dark:text-cyan-300">{on ? "ON" : "OFF"}</span>
        </p>
      </div>
    </div>
  );
}