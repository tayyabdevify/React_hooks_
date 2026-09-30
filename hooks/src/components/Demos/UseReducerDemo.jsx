import { useReducer } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1, history: [...state.history, "+1"] };
    case "dec": return { count: state.count - 1, history: [...state.history, "-1"] };
    case "add": return { count: state.count + action.payload, history: [...state.history, `+${action.payload}`] };
    case "reset": return initialState;
    default: return state;
  }
}

export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Count</p>
        <p className="text-4xl font-mono text-strong mb-4">{state.count}</p>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => dispatch({ type: "inc" })} className="px-3 py-1.5 rounded bg-fuchsia-500 hover:bg-fuchsia-400 text-white text-sm">+1</button>
          <button onClick={() => dispatch({ type: "dec" })} className="px-3 py-1.5 rounded bg-subtle hover:bg-hover text-strong text-sm">−1</button>
          <button onClick={() => dispatch({ type: "add", payload: 10 })} className="px-3 py-1.5 rounded bg-subtle hover:bg-hover text-strong text-sm">+10</button>
          <button onClick={() => dispatch({ type: "reset" })} className="px-3 py-1.5 rounded bg-red-500/20 hover:bg-red-500/30 text-red-700 dark:text-red-300 text-sm">Reset</button>
        </div>
      </div>
      <div className="p-5 rounded-xl bg-elevated border border-line">
        <p className="text-xs text-dim mb-2">Action history</p>
        <div className="flex flex-wrap gap-1.5">
          {state.history.length === 0 ? (
            <p className="text-sm text-muted">No actions yet...</p>
          ) : (
            state.history.map((h, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-700 dark:text-fuchsia-300 text-xs font-mono">{h}</span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}