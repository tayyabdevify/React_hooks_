import HookLayout from "../../components/HookLayout";

const code = `import { useOptimistic, useActionState } from "react";

async function sendMessage(prevMessages, formData) {
  const text = formData.get("text");
  const res = await fetch("/api/messages", { method: "POST", body: formData });
  return [...prevMessages, await res.json()];
}

function Chat({ messages }) {
  const [optimistic, addOptimistic] = useOptimistic(messages, (state, text) => [
    ...state,
    { text, pending: true },
  ]);

  return (
    <form
      action={async (formData) => {
        addOptimistic(formData.get("text"));
        await sendMessage(messages, formData);
      }}
    >
      <input name="text" />
      <button>Send</button>
      <ul>
        {optimistic.map((m, i) => (
          <li key={i}>{m.text} {m.pending && "(sending…)"}</li>
        ))}
      </ul>
    </form>
  );
}`;

export default function UseOptimistic() {
  return (
    <HookLayout
      name="useOptimistic"
      category="React 19+ Hook"
      categoryColor="from-emerald-500 to-teal-500"
      level="Advanced (React 19)"
      tagline="Optimistic UI updates — show the UI before the server confirms."
      theory={
        <>
          <p>
            Perfect for chat apps, likes, and comments. You provide a temporary
            state that shows during the pending action, and once the action
            completes it is replaced by the real state.
          </p>
        </>
      }
      syntax={`const [optimistic, addOptimistic] = useOptimistic(state, updateFn);`}
      code={code}
      interview={[
        { q: "When should you use useOptimistic?", a: "When you want instant feedback and rollback on server failure — likes, message send, follow buttons." },
      ]}
      related={[{ name: "useActionState", slug: "useactionstate" }]}
    />
  );
}