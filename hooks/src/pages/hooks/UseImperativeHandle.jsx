import HookLayout from "../../components/HookLayout";

const code = `import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return <input ref={inputRef} />;
});`;

export default function UseImperativeHandle() {
  return (
    <HookLayout
      name="useImperativeHandle"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced"
      tagline="Expose a custom, controlled API through a ref to parent components."
      theory={
        <>
          <p>
            Sometimes with <code>forwardRef</code> you want to expose specific
            methods to the parent instead of the whole DOM node. This hook does
            exactly that.
          </p>
        </>
      }
      syntax={`useImperativeHandle(ref, () => ({
  customMethod() { ... }
}), [deps]);`}
      code={code}
      mistakes={[
        "Using it more than necessary — prefer declarative props.",
        "Calling ref.current methods during render.",
      ]}
      interview={[
        { q: "What is a real-world use case for useImperativeHandle?", a: "Custom input components — expose only focus()/clear() to the parent without leaking the DOM node." },
      ]}
      related={[
        { name: "useRef", slug: "useref" },
        { name: "useLayoutEffect", slug: "uselayouteffect" },
      ]}
    />
  );
}