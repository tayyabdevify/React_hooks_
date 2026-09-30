export default function RouteLoader() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-line" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-500 animate-spin" />
        </div>
        <p className="text-xs text-muted tracking-wider uppercase">
          Loading…
        </p>
      </div>
    </div>
  );
}