import HookLayout from "../../components/HookLayout";
import UseReducerDemo from "../../components/demos/UseReducerDemo";

const code = `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset":     return { count: 0 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}`;

export default function UseReducer() {
  return (
    <HookLayout
      name="useReducer"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Intermediate"
      tagline="Organize complex state logic into a pure reducer function."
      theory={
        <>
          <p>
            <code>useReducer</code> brings a Redux-style pattern to React. You
            write a <strong>reducer</strong> function —{" "}
            <code>(state, action) =&gt; newState</code> — and dispatch updates
            through <code>dispatch</code>.
          </p>
          <h3>When to move from useState to useReducer?</h3>
          <ul>
            <li>When state has multiple related fields.</li>
            <li>When the next state depends on the previous one in complex ways.</li>
            <li>When transitions are better expressed as named actions.</li>
            <li>When you want testability — the reducer is a pure function.</li>
          </ul>
        </>
      }
      syntax={`const [state, dispatch] = useReducer(reducer, initialState, init?);`}
      demo={<UseReducerDemo />}
      code={code}
      mistakes={[
        "Adding side effects or API calls inside the reducer — reducers must be pure.",
        "Mutating state directly — always return a new object.",
        "Overkill — using useReducer for a simple counter.",
      ]}
      interview={[
        { q: "Why must the reducer function be pure?", a: "React may call it multiple times (Strict Mode, concurrent rendering). Side effects or mutation lead to unpredictable behavior and bugs." },
        { q: "How do you do lazy initialization with useReducer?", a: "Use the three-argument form: useReducer(reducer, initialArg, init). init(initialArg) runs only on the first render." },
      ]}
      related={[
        { name: "useState", slug: "usestate" },
        { name: "useContext", slug: "usecontext" },
      ]}
    />
  );
}