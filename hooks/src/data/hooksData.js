export const hookCategories = [
  {
    name: "Core Hooks",
    slug: "core",
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "useState", slug: "usestate", tagline: "State in function components" },
      { name: "useEffect", slug: "useeffect", tagline: "Side effects & lifecycle" },
      { name: "useContext", slug: "usecontext", tagline: "Global-ish shared state" },
    ],
  },
  {
    name: "Additional Hooks",
    slug: "additional",
    color: "from-violet-500 to-fuchsia-500",
    items: [
      { name: "useReducer", slug: "usereducer", tagline: "Complex state logic" },
      { name: "useCallback", slug: "usecallback", tagline: "Memoized callbacks" },
      { name: "useMemo", slug: "usememo", tagline: "Memoized values" },
      { name: "useRef", slug: "useref", tagline: "Mutable reference / DOM" },
      { name: "useImperativeHandle", slug: "useimperativehandle", tagline: "Expose ref APIs" },
      { name: "useLayoutEffect", slug: "uselayouteffect", tagline: "Sync before paint" },
      { name: "useDebugValue", slug: "usedebugvalue", tagline: "Label custom hooks" },
      { name: "useDeferredValue", slug: "usedeferredvalue", tagline: "Defer heavy UI" },
      { name: "useTransition", slug: "usetransition", tagline: "Non-blocking updates" },
      { name: "useId", slug: "useid", tagline: "SSR-safe unique IDs" },
      { name: "useSyncExternalStore", slug: "usesyncexternalstore", tagline: "Subscribe to stores" },
      { name: "useInsertionEffect", slug: "useinsertioneffect", tagline: "CSS-in-JS injection" },
    ],
  },
  {
    name: "React 19+ Hooks",
    slug: "react19",
    color: "from-emerald-500 to-teal-500",
    items: [
      { name: "useActionState", slug: "useactionstate", tagline: "Form actions state" },
      { name: "useOptimistic", slug: "useoptimistic", tagline: "Optimistic UI" },
      { name: "useFormStatus", slug: "useformstatus", tagline: "Form submit status" },
      { name: "useEffectEvent", slug: "useeffectevent", tagline: "Stable effect handlers" },
    ],
  },
];

export const allHooks = hookCategories.flatMap((cat) =>
  cat.items.map((it) => ({ ...it, category: cat.name, categoryColor: cat.color }))
);