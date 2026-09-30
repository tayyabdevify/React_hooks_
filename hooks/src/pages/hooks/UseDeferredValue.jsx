import HookLayout from "../../components/HookLayout";

const code = `import { useDeferredValue, useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <Results query={deferred} />
    </>
  );
}`;

export default function UseDeferredValue() {
  return (
    <HookLayout
      name="useDeferredValue"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced"
      tagline="Get a deferred copy of a value — keep urgent UI from being blocked."
      theory={
        <>
          <p>
            A concurrency feature. You pass a value and React returns a stale
            copy until the new update is ready. This keeps heavy lists (like
            search results) smooth while typing.
          </p>
        </>
      }
      syntax={`const deferred = useDeferredValue(value);`}
      code={code}
      interview={[
        { q: "useDeferredValue vs useTransition?", a: "useTransition marks updates as low priority. useDeferredValue gives a deferred copy of a value — useful when you do not control the state update (e.g. it comes from props)." },
      ]}
      related={[{ name: "useTransition", slug: "usetransition" }]}
    />
  );
}