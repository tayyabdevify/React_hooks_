import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center px-4">
      <div className="text-center">
        <p className="text-7xl font-extrabold bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-strong">
          Page not found
        </h1>
        <p className="mt-2 text-muted">
          This hook does not exist (maybe you need to build a custom one 😄).
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition"
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}