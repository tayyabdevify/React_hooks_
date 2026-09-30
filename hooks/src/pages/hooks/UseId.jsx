import HookLayout from "../../components/HookLayout";

const code = `import { useId } from "react";

function EmailField() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>Email</label>
      <input id={id} type="email" />
    </>
  );
}`;

export default function UseId() {
  return (
    <HookLayout
      name="useId"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Beginner"
      tagline="Generate an SSR-safe unique ID — perfect for form labels."
      theory={
        <>
          <p>
            <code>useId</code> returns a stable unique string that matches on
            client and server. Used for accessibility attributes like{" "}
            <code>htmlFor</code>/<code>aria-describedby</code>.
          </p>
        </>
      }
      syntax={`const id = useId();`}
      code={code}
      interview={[
        { q: "Can you use useId for a key prop?", a: "No. Keys are for list items; useId is for unique accessibility attributes." },
      ]}
    />
  );
}