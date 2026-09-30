import HookLayout from "../../components/HookLayout";

const code = `import { useInsertionEffect } from "react";

function useCSS(rule) {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = rule;
    document.head.appendChild(style);
    return () => style.remove();
  }, [rule]);
}`;

export default function UseInsertionEffect() {
  return (
    <HookLayout
      name="useInsertionEffect"
      category="Additional Hook"
      categoryColor="from-violet-500 to-fuchsia-500"
      level="Advanced (Library Authors)"
      tagline="For CSS-in-JS libraries — a special hook to inject styles into the DOM."
      theory={
        <>
          <p>
            Runs before layout effects. Only for CSS-in-JS library authors.
            Your app code will rarely touch this.
          </p>
        </>
      }
      syntax={`useInsertionEffect(() => { injectStyles(); }, [deps]);`}
      code={code}
      interview={[
        { q: "How is useInsertionEffect different from useLayoutEffect?", a: "useInsertionEffect runs before layout effects and should not read/write the DOM — only inject styles." },
      ]}
    />
  );
}