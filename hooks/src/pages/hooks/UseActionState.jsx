import HookLayout from "../../components/HookLayout";

const code = `import { useActionState } from "react";

async function submitAction(prevState, formData) {
  const name = formData.get("name");
  if (!name) return { error: "Name required" };
  await fetch("/api/save", { method: "POST", body: formData });
  return { success: true };
}

function Form() {
  const [state, formAction, isPending] = useActionState(submitAction, {});

  return (
    <form action={formAction}>
      <input name="name" />
      <button disabled={isPending}>
        {isPending ? "Saving…" : "Save"}
      </button>
      {state.error && <p>{state.error}</p>}
    </form>
  );
}`;

export default function UseActionState() {
  return (
    <HookLayout
      name="useActionState"
      category="React 19+ Hook"
      categoryColor="from-emerald-500 to-teal-500"
      level="Intermediate (React 19)"
      tagline="Manage form action state, pending, and error in one hook."
      theory={
        <>
          <p>
            Introduced in React 19. You pass an async action and an initial
            state, and it returns{" "}
            <code>[state, formAction, isPending]</code>. When the form is
            submitted, the action result becomes the state.
          </p>
        </>
      }
      syntax={`const [state, formAction, isPending] = useActionState(actionFn, initialState);`}
      code={code}
      mistakes={[
        "Not making the action function async — React 19 expects it to be async.",
      ]}
      interview={[
        { q: "What is the difference between useActionState and a controlled form?", a: "useActionState supports progressive enhancement — the form works without JS; a controlled form does not." },
      ]}
      related={[
        { name: "useFormStatus", slug: "useformstatus" },
        { name: "useOptimistic", slug: "useoptimistic" },
      ]}
    />
  );
}