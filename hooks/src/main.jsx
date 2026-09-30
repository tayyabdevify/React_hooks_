import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Loader from "./components/Loader";
import { ThemeProvider } from "./context/ThemeProvider";
import "./index.css";

function Root() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulate initial load — replace with real init logic if needed
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <Loader label="Warming up…" />;

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);