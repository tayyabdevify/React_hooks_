export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-sm text-white">
              ⚛
            </div>
            <p className="text-sm text-muted">
              React Hooks Guide — Learn by building.
            </p>
          </div>
          <p className="text-xs text-dim">
            © {new Date().getFullYear()} · Built with React & Tailwind CSS v4  tayyab ahmad
          </p>
        </div>
      </div>
    </footer>
  );
}