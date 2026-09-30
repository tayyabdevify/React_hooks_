import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Timer (with cleanup)</p>
        <p className="text-4xl font-mono text-strong">
          {String(Math.floor(seconds / 60)).padStart(2, "0")}:
          {String(seconds % 60).padStart(2, "0")}
        </p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setRunning((r) => !r)}
            className="px-3 py-1.5 rounded bg-cyan-500 hover:bg-cyan-400 text-white text-sm"
          >
            {running ? "Pause" : "Resume"}
          </button>
          <button
            onClick={() => {
              setSeconds(0);
              setRunning(false);
            }}
            className="px-3 py-1.5 rounded bg-subtle hover:bg-hover text-muted text-sm"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="p-5 rounded-xl bg-elevated border border-line text-sm text-muted">
        <p className="text-xs text-dim mb-2">Cleanup note</p>
        <p>
          When you click "Pause", the interval is cleared. Without cleanup,
          multiple intervals would keep running at once — a classic bug.
        </p>
      </div>
    </div>
  );
}