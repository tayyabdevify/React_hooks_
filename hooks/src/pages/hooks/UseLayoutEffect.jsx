import HookLayout from "../../components/HookLayout";

const code = `import { useLayoutEffect, useRef } from "react";

function Tooltip() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    // position tooltip synchronously before paint
  }, []);

  return <div ref={ref}>...</div>;
}`;

export default function UseLayoutEffect() {
  return (
    <HookLayout
      name="useLayoutEffect"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced"
      tagline="Like useEffect, but runs synchronously before the browser paints."
      theory={
        <>
          <p>
            When you need to measure the DOM and immediately update the UI
            (tooltip positioning, scroll sync, animations), use{" "}
            <code>useLayoutEffect</code>. Otherwise you will see a flicker
            after paint.
          </p>
          <p>
            ⚠️ It warns during SSR because there is no layout on the server.
          </p>
        </>
      }
      syntax={`useLayoutEffect(() => {
  // measure DOM, apply sync updates
  return () => cleanup;
}, [deps]);`}
      code={code}
      mistakes={[
        "Using useLayoutEffect for every side effect — it will hurt performance.",
        "Using it in SSR without a guard.",
      ]}
      interview={[
        { q: "useLayoutEffect vs useEffect — when to use which?", a: "useEffect in 90% of cases. Use useLayoutEffect only when you need a synchronous DOM change before paint." },
      ]}
      related={[{ name: "useEffect", slug: "useeffect" }]}
    />
  );
}