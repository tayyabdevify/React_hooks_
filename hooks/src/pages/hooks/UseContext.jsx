import HookLayout from "../../components/HookLayout";

const code = `import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}`;

export default function UseContext() {
  return (
    <HookLayout
      name="useContext"
      category="Core Hook"
      categoryColor="from-cyan-500 to-blue-500"
      level="Beginner → Intermediate"
      tagline="Read context values deep in the tree without prop drilling."
      theory={
        <>
          <p>
            <code>useContext</code> lets a component read the value from the
            nearest <code>Context.Provider</code> above it. It's used for
            theme, language, auth user, and other cross-cutting values.
          </p>
          <h3>Prop drilling vs Context</h3>
          <p>
            If the same value is being passed 4-5 levels deep, use Context. For
            small trees, plain props are better — Context can easily become
            over-engineering.
          </p>
          <p>
            ⚠️ When a Context value changes, every component consuming that
            value re-renders. Memoize the value or split into multiple smaller
            contexts to avoid unnecessary renders.
          </p>
        </>
      }
      syntax={`const value = useContext(MyContext);`}
      code={code}
      mistakes={[
        "Not stabilizing the context value with useMemo — causes extra re-renders.",
        "Using one giant context for everything — smaller contexts are better.",
      ]}
      interview={[
        { q: "Can Context replace Redux?", a: "For simple global state (theme, user), yes. For complex state logic, devtools, middleware, and performance-critical updates, Redux/Zustand are better." },
        { q: "What happens when a context value changes?", a: "Every consumer under that Provider re-renders — even if only a small part of the value changed." },
      ]}
      related={[
        { name: "useState", slug: "usestate" },
        { name: "useReducer", slug: "usereducer" },
      ]}
    />
  );
}