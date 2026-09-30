import HookLayout from "../../components/HookLayout";
import UseStateDemo from "../../components/demos/UseStateDemo";

const code = `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </div>
  );
}`;

export default function UseState() {
  return (
    <HookLayout
      name="useState"
      category="Core Hook"
      categoryColor="from-cyan-500 to-blue-500"
      level="Beginner"
      tagline="Add local state to function components — the most commonly used hook."
      theory={
        <>
          <p>
            <code>useState</code> is a React hook that lets you add a{" "}
            <strong>state variable</strong> to a function component. It returns
            an array with two items: the current state and a setter function.
          </p>
          <h3>When to use it?</h3>
          <ul>
            <li>When a component needs to "remember" a value (counter, input, toggle).</li>
            <li>When state changes should trigger a re-render.</li>
            <li>When the state is local to one component — not global.</li>
          </ul>
          <h3>Two ways to update</h3>
          <ul>
            <li>
              <strong>Direct value:</strong> <code>setCount(5)</code>
            </li>
            <li>
              <strong>Updater function:</strong>{" "}
              <code>setCount(prev =&gt; prev + 1)</code> — use this when the new
              value depends on the previous one.
            </li>
          </ul>
          <p>
            ⚠️ State updates are <strong>asynchronous</strong> and batched. So
            calling <code>setCount(count + 1)</code> three times in one event
            only increases the count by 1. Use the updater function to fix this.
          </p>
        </>
      }
      syntax={`const [state, setState] = useState(initialValue);`}
      demo={<UseStateDemo />}
      code={code}
      mistakes={[
        "Mutating state directly — setCount(count++) will not work.",
        "Calling useState conditionally or inside loops — this breaks the Rules of Hooks.",
        "Ignoring the asynchronous nature — expecting the value to update immediately.",
      ]}
      interview={[
        { q: "When should you choose useState vs useReducer?", a: "Use useState for simple, independent values. Use useReducer when state transitions are complex, involve multiple fields, or need to be organized into explicit actions." },
        { q: "What is lazy initial state?", a: "If computing the initial value is expensive, pass useState(() => expensiveCompute()). The function runs only once on the first render." },
        { q: "Is useState synchronous or asynchronous?", a: "React state updates are asynchronous and batched. You cannot read the updated value in the same closure right after calling the setter." },
      ]}
      related={[
        { name: "useReducer", slug: "usereducer" },
        { name: "useRef", slug: "useref" },
        { name: "useContext", slug: "usecontext" },
      ]}
    />
  );
}