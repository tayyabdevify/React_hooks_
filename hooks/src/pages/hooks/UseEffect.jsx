import HookLayout from "../../components/HookLayout";
import UseEffectDemo from "../../components/demos/UseEffectDemo";

const code = `import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Elapsed: {seconds}s</p>;
}`;

export default function UseEffect() {
  return (
    <HookLayout
      name="useEffect"
      category="Core Hook"
      categoryColor="from-cyan-500 to-blue-500"
      level="Beginner → Intermediate"
      tagline="Sync your component with the outside world — API calls, subscriptions, timers, DOM."
      theory={
        <>
          <p>
            <code>useEffect</code> tells React to run some code after render
            that is not part of the pure render logic — such as network calls,
            subscriptions, timers, or DOM manipulation.
          </p>
          <h3>The magic of the dependency array</h3>
          <ul>
            <li><code>useEffect(fn)</code> — runs after every render (rarely needed).</li>
            <li><code>useEffect(fn, [])</code> — runs once on mount only.</li>
            <li><code>useEffect(fn, [a, b])</code> — runs whenever <code>a</code> or <code>b</code> changes.</li>
          </ul>
          <h3>Why is the cleanup function important?</h3>
          <p>
            If you set up a subscription, interval, or listener, you must return
            a cleanup function or you will leak memory. React calls the cleanup
            before running the effect again and when the component unmounts.
          </p>
          <p>
            💡 In React 18's Strict Mode, effects mount <strong>twice</strong>{" "}
            in development — this is a feature that helps catch cleanup bugs.
            Write your cleanup properly and you have nothing to fear.
          </p>
        </>
      }
      syntax={`useEffect(() => {
  // do something
  return () => {
    // cleanup
  };
}, [dependencies]);`}
      demo={<UseEffectDemo />}
      code={code}
      mistakes={[
        "Forgetting the cleanup function — memory leaks.",
        "Missing a variable in the dependency array — you will get stale closures.",
        "Passing objects or arrays as dependencies — new reference every render causes infinite loops.",
        "Fetching data directly in an effect without handling abort/ignore.",
      ]}
      interview={[
        { q: "When is the useEffect cleanup function called?", a: "Before the effect runs again and when the component unmounts." },
        { q: "Why does the effect run twice in Strict Mode?", a: "In development, React intentionally mounts → unmounts → mounts the effect to help catch cleanup-related bugs. In production, it runs only once." },
        { q: "useEffect vs useLayoutEffect?", a: "useEffect runs asynchronously after paint. useLayoutEffect runs synchronously before paint — used for layout measurements." },
      ]}
      related={[
        { name: "useLayoutEffect", slug: "uselayouteffect" },
        { name: "useEffectEvent", slug: "useeffectevent" },
        { name: "useSyncExternalStore", slug: "usesyncexternalstore" },
      ]}
    />
  );
}