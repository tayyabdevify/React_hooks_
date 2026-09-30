import HookLayout from "../../components/HookLayout";

const code = `import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting…" : "Submit"}
    </button>
  );
}

function Form() {
  return (
    <form action="/api/submit">
      <input name="email" />
      <SubmitButton />
    </form>
  );
}`;

export default function UseFormStatus() {
  return (
    <HookLayout
      name="useFormStatus"
      category="React 19+ Hook"
      categoryColor="from-emerald-500 to-teal-500"
      level="Intermediate (React 19)"
      tagline="Read a form's submit pending status from inside the form — no prop drilling."
      theory={
        <>
          <p>
            Imported from <code>react-dom</code>. It integrates with the parent{" "}
            <code>&lt;form&gt;</code>. Only use it in a component{" "}
            <strong>inside</strong> the form.
          </p>
        </>
      }
      syntax={`const { pending, data, method, action } = useFormStatus();`}
      code={code}
      interview={[
        { q: "Where should useFormStatus be called?", a: "In a component that is inside the form — not in the parent that renders the form element." },
      ]}
      related={[{ name: "useActionState", slug: "useactionstate" }]}
    />
  );
}