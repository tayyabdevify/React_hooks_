import HookLayout from "../../components/HookLayout";
import UseMemoDemo from "../../components/demos/UseMemoDemo";

const code = `import { useMemo, useState } from "react";

function Filter({ items, query }) {
  const filtered = useMemo(
    () => items.filter((i) => i.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  return <ul>{filtered.map((i) => <li key={i}>{i}</li>)}</ul>;
}`;

export default function UseMemo() {
  return (
    <HookLayout
      name="useMemo"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Intermediate"
      tagline="Cache an expensive calculation — recompute only when dependencies change."
      theory={
        <>
          <p>
            <code>useMemo</code> takes a function and a dependency array and
            returns a <strong>memoized value</strong>. As long as the
            dependencies don't change, the cached value is returned.
          </p>
          <h3>When to use it?</h3>
          <ul>
            <li>Expensive computation (sorting, filtering, parsing).</li>
            <li>Maintaining referential equality for a child's props.</li>
            <li>Making an object/array stable when used as a dependency.</li>
          </ul>
          <p>
            ⚠️ Don't wrap everything in useMemo — memoization has a cost too.
            Measure first (React DevTools Profiler), then optimize.
          </p>
        </>
      }
      syntax={`const cachedValue = useMemo(() => compute(a, b), [a, b]);`}
      demo={<UseMemoDemo />}
      code={code}
      mistakes={[
        "Wrapping every small calculation in useMemo — premature optimization.",
        "Missing dependencies — you will get stale values.",
        "Running side effects inside useMemo — it must be pure.",
      ]}
      interview={[
        { q: "What is the difference between useMemo and useCallback?", a: "useMemo memoizes a computed value. useCallback memoizes a function reference — essentially useCallback(fn, deps) === useMemo(() => fn, deps)." },
        { q: "Does useMemo always improve performance?", a: "No. It adds overhead for dependency comparison and caching. Only use it when the calculation is measurably slow." },
      ]}
      related={[
        { name: "useCallback", slug: "usecallback" },
        { name: "useDeferredValue", slug: "usedeferredvalue" },
      ]}
    />
  );
}