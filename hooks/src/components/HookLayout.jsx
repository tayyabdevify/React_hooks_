import { Link } from "react-router-dom";
import CodeBlock from "./CodeBlock";

export default function HookLayout({
  name, category, categoryColor, level, tagline, theory, syntax,
  demo, code, mistakes = [], interview = [], related = [],
}) {
  return (
    <article className="animate-fade-in">
      {/* Hero */}
      <section className="border-b border-line relative overflow-hidden">
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${categoryColor}`} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColor} bg-clip-text text-transparent border border-line`}>
              {category}
            </span>
            <span className="text-xs text-dim">·</span>
            <span className="text-xs text-muted">{level}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-strong tracking-tight">
            <span className="font-mono bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl">{tagline}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Theory */}
        <section className="mb-12">
          <SectionTitle>📚 Theory</SectionTitle>
          <div className="prose-hook max-w-none">{theory}</div>
        </section>

        {/* Syntax */}
        {syntax && (
          <section className="mb-12">
            <SectionTitle>✍️ Syntax</SectionTitle>
            <div className="rounded-xl bg-elevated border border-line p-5 overflow-x-auto">
              <code className="font-mono text-sm text-cyan-600 dark:text-cyan-300 whitespace-pre">
                {syntax}
              </code>
            </div>
          </section>
        )}

        {/* Live Demo */}
        {demo && (
          <section className="mb-12">
            <SectionTitle>🎮 Live Demo</SectionTitle>
            <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
              {demo}
            </div>
          </section>
        )}

        {/* Code */}
        {code && (
          <section className="mb-12">
            <SectionTitle>💻 Full Example</SectionTitle>
            <CodeBlock code={code} />
          </section>
        )}

        {/* Mistakes */}
        {mistakes.length > 0 && (
          <section className="mb-12">
            <SectionTitle>⚠️ Common Mistakes</SectionTitle>
            <ul className="space-y-3">
              {mistakes.map((m, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border border-red-500/30 bg-red-500/5"
                >
                  <span className="text-red-500 shrink-0">✕</span>
                  <span className="text-muted text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Interview */}
        {interview.length > 0 && (
          <section className="mb-12">
            <SectionTitle>🎯 Interview Questions</SectionTitle>
            <div className="space-y-2">
              {interview.map((q, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-line bg-panel p-4 open:bg-elevated"
                >
                  <summary className="cursor-pointer text-sm font-medium text-strong flex items-center justify-between">
                    <span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-mono mr-2">
                        Q{i + 1}.
                      </span>
                      {q.q}
                    </span>
                    <span className="text-dim group-open:rotate-180 transition-transform">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted leading-relaxed pl-8">
                    {q.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section>
            <SectionTitle>🔗 Related Hooks</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/hooks/${r.slug}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-mono text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition"
                >
                  {r.name}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
      {children}
    </h2>
  );
}