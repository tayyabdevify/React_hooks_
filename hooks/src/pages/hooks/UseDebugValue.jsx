import HookLayout from "../../components/HookLayout";

const code = `import { useDebugValue, useState, useEffect } from "react";

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // subscribe to online/offline events
  }, []);

  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}`;

export default function UseDebugValue() {
  return (
    <HookLayout
      name="useDebugValue"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Intermediate"
      tagline="Give a readable label to custom hooks in React DevTools."
      theory={
        <>
          <p>
            Only used inside custom hooks. It shows a label next to your custom
            hook in React DevTools — useful for debugging.
          </p>
        </>
      }
      syntax={`useDebugValue(valueOrFormatter);`}
      code={code}
      mistakes={["Adding it everywhere without considering the production impact."]}
      interview={[
        { q: "In what kind of hooks is useDebugValue useful?", a: "Shared library hooks — such as useOnlineStatus — so users can clearly see state in DevTools." },
      ]}
    />
  );
}