export default function Loader({ label = "Loading…" }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-page">
      {/* Ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center gap-6 animate-fade-in">
        {/* Spinner + Logo */}
        <div className="relative w-24 h-24">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-line" />
          <div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-cyan-500 border-r-cyan-500 animate-spin"
            style={{ animationDuration: "1s" }}
          />
          <div
            className="absolute inset-2 rounded-full border-[2px] border-transparent border-b-violet-500 border-l-violet-500 animate-spin"
            style={{ animationDuration: "1.6s", animationDirection: "reverse" }}
          />

          {/* Center atom */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center shadow-lg shadow-cyan-500/30">
              <span className="text-white text-2xl">⚛</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-bold text-strong tracking-tight text-lg">
            Hooks Guide
          </p>
          <p className="text-xs text-muted mt-1 tracking-wider uppercase">
            {label}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}