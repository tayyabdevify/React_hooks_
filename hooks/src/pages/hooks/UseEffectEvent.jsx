import HookLayout from "../../components/HookLayout";

const code = `import { useEffect, useEffectEvent, useState } from "react";

function Chat({ roomId, theme }) {
  const [messages, setMessages] = useState([]);

  const onMessage = useEffectEvent((msg) => {
    // always sees latest theme without re-subscribing
    showNotification(msg, theme);
  });

  useEffect(() => {
    const conn = createConnection(roomId);
    conn.on("message", onMessage);
    return () => conn.disconnect();
  }, [roomId]);

  return <div>{messages.length} messages</div>;
}`;

export default function UseEffectEvent() {
  return (
    <HookLayout
      name="useEffectEvent"
      category="React 19+ Hook"
      categoryColor="from-emerald-500 to-teal-500"
      level="Advanced (React 19.2)"
      tagline="Read the latest props/state from inside an effect without breaking the dependency list."
      theory={
        <>
          <p>
            This became stable in React 19.2. It lets you create a stable
            function inside an effect that always sees the latest props/state.
          </p>
        </>
      }
      syntax={`const onTick = useEffectEvent(() => {
  // reads latest props/state
});
useEffect(() => {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}, []);`}
      code={code}
      interview={[
        { q: "How does useEffectEvent solve the dependency array problem?", a: "You can read the latest values from inside an effect without adding them to dependencies — solving both infinite loops and stale closures." },
      ]}
      related={[{ name: "useEffect", slug: "useeffect" }]}
    />
  );
}