import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteLoader from "./components/RouteLoader";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

/* Lazy-loaded hook pages (only downloaded when visited) */
const UseState = lazy(() => import("./pages/hooks/UseState"));
const UseEffect = lazy(() => import("./pages/hooks/UseEffect"));
const UseContext = lazy(() => import("./pages/hooks/UseContext"));
const UseReducer = lazy(() => import("./pages/hooks/UseReducer"));
const UseCallback = lazy(() => import("./pages/hooks/UseCallback"));
const UseMemo = lazy(() => import("./pages/hooks/UseMemo"));
const UseRef = lazy(() => import("./pages/hooks/UseRef"));
const UseLayoutEffect = lazy(() => import("./pages/hooks/UseLayoutEffect"));
const UseImperativeHandle = lazy(() => import("./pages/hooks/UseImperativeHandle"));
const UseDebugValue = lazy(() => import("./pages/hooks/UseDebugValue"));
const UseDeferredValue = lazy(() => import("./pages/hooks/UseDeferredValue"));
const UseTransition = lazy(() => import("./pages/hooks/UseTransition"));
const UseId = lazy(() => import("./pages/hooks/UseId"));
const UseSyncExternalStore = lazy(() => import("./pages/hooks/UseSyncExternalStore"));
const UseInsertionEffect = lazy(() => import("./pages/hooks/UseInsertionEffect"));
const UseActionState = lazy(() => import("./pages/hooks/UseActionState"));
const UseOptimistic = lazy(() => import("./pages/hooks/UseOptimistic"));
const UseFormStatus = lazy(() => import("./pages/hooks/UseFormStatus"));
const UseEffectEvent = lazy(() => import("./pages/hooks/UseEffectEvent"));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hooks/usestate" element={<UseState />} />
            <Route path="/hooks/useeffect" element={<UseEffect />} />
            <Route path="/hooks/usecontext" element={<UseContext />} />
            <Route path="/hooks/usereducer" element={<UseReducer />} />
            <Route path="/hooks/usecallback" element={<UseCallback />} />
            <Route path="/hooks/usememo" element={<UseMemo />} />
            <Route path="/hooks/useref" element={<UseRef />} />
            <Route path="/hooks/uselayouteffect" element={<UseLayoutEffect />} />
            <Route path="/hooks/useimperativehandle" element={<UseImperativeHandle />} />
            <Route path="/hooks/usedebugvalue" element={<UseDebugValue />} />
            <Route path="/hooks/usedeferredvalue" element={<UseDeferredValue />} />
            <Route path="/hooks/usetransition" element={<UseTransition />} />
            <Route path="/hooks/useid" element={<UseId />} />
            <Route path="/hooks/usesyncexternalstore" element={<UseSyncExternalStore />} />
            <Route path="/hooks/useinsertioneffect" element={<UseInsertionEffect />} />
            <Route path="/hooks/useactionstate" element={<UseActionState />} />
            <Route path="/hooks/useoptimistic" element={<UseOptimistic />} />
            <Route path="/hooks/useformstatus" element={<UseFormStatus />} />
            <Route path="/hooks/useeffectevent" element={<UseEffectEvent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}