import HookLayout from "../../components/HookLayout";

const code = `import { useTransition, useState } from "react";

function Tabs() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("home");

  const select = (next) => {
    startTransition(() => setTab(next));
  };

  return (
    <>
      <button onClick={() => select("posts")}>Posts</button>
      {isPending && <span>Loading…</span>}
    </>
  );
}`;

export default function UseTransition() {
  return (
    <HookLayout
      name="useTransition"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced"
      tagline="Mark a state update as non-urgent to keep the UI responsive."
      theory={
        <>
          <p>
            <code>useTransition</code> returns an array:{" "}
            <code>[isPending, startTransition]</code>. Any update wrapped in{" "}
            <code>startTransition</code> is treated as low priority.
          </p>
        </>
      }
      syntax={`const [isPending, startTransition] = useTransition();`}
      code={code}
      interview={[
        { q: "What can you put inside startTransition?", a: "State setters. Not side effects — put those in useEffect." },
      ]}
      related={[{ name: "useDeferredValue", slug: "usedeferredvalue" }]}
    />
  );
}