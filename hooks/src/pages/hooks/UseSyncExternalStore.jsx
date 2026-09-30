import HookLayout from "../../components/HookLayout";

const code = `import { useSyncExternalStore } from "react";

function useOnline() {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("online", cb);
      window.addEventListener("offline", cb);
      return () => {
        window.removeEventListener("online", cb);
        window.removeEventListener("offline", cb);
      };
    },
    () => navigator.onLine,
    () => true
  );
}`;

export default function UseSyncExternalStore() {
  return (
    <HookLayout
      name="useSyncExternalStore"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced"
      tagline="Safely subscribe to external stores (Redux, browser APIs) — concurrent-safe."
      theory={
        <>
          <p>
            This hook lets you subscribe to any external store in a way that is
            tear-free with React. For SSR, you provide two functions — server
            snapshot and client snapshot.
          </p>
        </>
      }
      syntax={`const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);`}
      code={code}
      interview={[
        { q: "Why was useSyncExternalStore introduced?", a: "To prevent tearing in React 18 concurrent rendering — external stores provide a consistent snapshot." },
      ]}
    />
  );
}