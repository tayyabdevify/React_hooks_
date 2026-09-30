import { Link } from "react-router-dom";
import { hookCategories } from "../data/hooksData";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel text-xs text-muted mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Updated for React 19 + Tailwind v4
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-strong tracking-tight leading-tight">
            Master{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
              React Hooks
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Theory, syntax, live demos, real-world examples and interview
            questions for every hook — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/hooks/usestate"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 transition shadow-lg shadow-cyan-500/20"
            >
              Start Learning →
            </Link>
            <a
              href="https://react.dev/reference/react"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-line text-muted hover:text-strong hover:bg-hover transition"
            >
              Official Docs
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-strong">
            Hook Categories
          </h2>
          <p className="text-muted mt-2">
            Pick a category and start learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {hookCategories.map((cat) => (
            <div
              key={cat.slug}
              className="rounded-2xl border border-line bg-panel overflow-hidden hover:border-line-strong transition"
            >
              <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
              <div className="p-6">
                <h3 className="font-semibold text-strong text-lg">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {cat.items.length} hooks
                </p>
                <ul className="mt-5 space-y-1">
                  {cat.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/hooks/${item.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-hover transition group"
                      >
                        <span className="font-mono text-cyan-700 dark:text-cyan-300">
                          {item.name}
                        </span>
                        <span className="text-dim group-hover:text-muted transition">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}