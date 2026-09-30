import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [n, setN] = useState(30);
  const [color, setColor] = useState(false);

  const items = Array.from({ length: 5000 }, (_, i) => i);
  const query = String(n);

  const filtered = useMemo(() => {
    let s = 0;
    for (let i = 0; i < 500; i++) s += i;
    return items.filter((i) => String(i).includes(query));
  }, [query]);

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Filter 5000 items by number</p>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          className="w-full px-3 py-2 rounded bg-page border border-line text-sm text-strong outline-none focus:border-violet-500"
        />
        <p className="text-xs text-muted mt-3">
          Matches:{" "}
          <span className="font-mono text-violet-700 dark:text-violet-300">{filtered.length}</span>
        </p>
      </div>
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Toggle (memoized filter does not rerun)</p>
        <button
          onClick={() => setColor((c) => !c)}
          className={`px-3 py-2 rounded text-sm transition ${
            color ? "bg-violet-500 text-white" : "bg-subtle hover:bg-hover text-strong"
          }`}
        >
          {color ? "ON" : "OFF"}
        </button>
        <p className="text-xs text-dim mt-3">
          Toggling the color does not rerun the filter — the memo is cached.
        </p>
      </div>
    </div>
  );
}