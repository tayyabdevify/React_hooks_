import HookLayout from "../../components/HookLayout";

const code = `import { useCallback } from "react";

function Parent() {
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return <MemoChild onClick={handleClick} />;
}`;

export default function UseCallback() {
  return (
    <HookLayout
      name="useCallback"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Intermediate"
      tagline="Memoize a function reference — especially when passed to memoized children."
      theory={
        <>
          <p>
            <code>useCallback(fn, deps)</code> returns a memoized version that
            only changes when the dependencies change. This helps avoid
            unnecessary re-renders of children wrapped in <code>React.memo</code>.
          </p>
          <p>
            It's essentially function-specific sugar for{" "}
            <code>useMemo(() =&gt; fn, deps)</code>.
          </p>
        </>
      }
      syntax={`const memoFn = useCallback(() => { ... }, [deps]);`}
      code={code}
      mistakes={[
        "Using useCallback without React.memo — zero benefit.",
        "Wrong or missing dependencies — stale closures.",
      ]}
      interview={[
        { q: "When is useCallback actually necessary?", a: "When passing a stable function prop to a memoized child, or when the function is a dependency of an effect." },
      ]}
      related={[
        { name: "useMemo", slug: "usememo" },
        { name: "useState", slug: "usestate" },
      ]}
    />
  );
}