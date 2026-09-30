import HookLayout from "../../components/HookLayout";
import UseRefDemo from "../../components/demos/UseRefDemo";

const code = `import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);
  const focus = () => inputRef.current?.focus();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
}`;

export default function UseRef() {
  return (
    <HookLayout
      name="useRef"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Beginner"
      tagline="A mutable box that does not trigger re-renders — for DOM nodes and persistent values."
      theory={
        <>
          <p>
            <code>useRef</code> returns an object —{" "}
            <code>{"{ current: initialValue }"}</code>. It serves two purposes:
          </p>
          <ul>
            <li>Accessing DOM nodes directly (focus, scroll, measure).</li>
            <li>Storing a value across renders without triggering a re-render (timer ids, previous values).</li>
          </ul>
          <h3>useRef vs useState</h3>
          <ul>
            <li><strong>useState</strong>: changing the value triggers a re-render.</li>
            <li><strong>useRef</strong>: changing the value does <em>not</em> trigger a re-render.</li>
          </ul>
          <p>
            ⚠️ Do not read or write <code>ref.current</code> during render —
            only inside events or effects.
          </p>
        </>
      }
      syntax={`const ref = useRef(initialValue);
ref.current = newValue; // does not trigger a re-render`}
      demo={<UseRefDemo />}
      code={code}
      mistakes={[
        "Displaying a ref's value in JSX — since there is no re-render, the change will not appear.",
        "Treating useRef like state — it is not reactive.",
      ]}
      interview={[
        { q: "What is the main difference between useRef and useState?", a: "useRef does not trigger a re-render, and its value persists across renders. useState triggers a re-render." },
        { q: "Is useRef only for DOM?", a: "No, it is a general-purpose mutable box — for timer ids, previous values, instance variables, and more." },
      ]}
      related={[
        { name: "useImperativeHandle", slug: "useimperativehandle" },
        { name: "useState", slug: "usestate" },
      ]}
    />
  );
}