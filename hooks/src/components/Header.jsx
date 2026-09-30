import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { hookCategories } from "../data/hooksData";
import ThemeToggle from "./ThemeToggle";
import Logo from "../assets/tayyab.png"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-page/80 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-line shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-shadow bg-panel">
              <img
                src={Logo}
                alt="Hooks Guide logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-bold text-strong text-sm">Hooks Guide</p>
              <p className="text-[10px] text-dim tracking-wider uppercase">
                zero → pro
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition ${
                  isActive
                    ? "text-strong bg-hover"
                    : "text-muted hover:text-strong hover:bg-hover"
                }`
              }
            >
              Home
            </NavLink>

            {hookCategories.map((cat) => (
              <div
                key={cat.slug}
                className="relative"
                onMouseEnter={() => setOpenMenu(cat.slug)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  className={`px-3 py-2 text-sm rounded-md transition flex items-center gap-1.5 ${
                    openMenu === cat.slug
                      ? "text-strong bg-hover"
                      : "text-muted hover:text-strong hover:bg-hover"
                  }`}
                >
                  {cat.name}
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openMenu === cat.slug ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openMenu === cat.slug && (
                  <div className="absolute top-full left-0 pt-2 w-80 animate-slide-down">
                    <div className="bg-panel border border-line rounded-xl shadow-2xl shadow-black/20 dark:shadow-black/40 overflow-hidden">
                      <div className={`h-1 w-full bg-gradient-to-r ${cat.color}`} />
                      <div className="p-2 max-h-96 overflow-y-auto">
                        {cat.items.map((item) => {
                          const active =
                            location.pathname === `/hooks/${item.slug}`;
                          return (
                            <Link
                              key={item.slug}
                              to={`/hooks/${item.slug}`}
                              onClick={() => setOpenMenu(null)}
                              className={`block px-3 py-2.5 rounded-lg transition ${
                                active ? "bg-hover" : "hover:bg-hover"
                              }`}
                            >
                              <p className="text-sm font-mono text-cyan-600 dark:text-cyan-300">
                                {item.name}
                              </p>
                              <p className="text-xs text-dim mt-0.5">
                                {item.tagline}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: theme toggle + mobile menu button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 grid place-items-center text-muted hover:text-strong rounded-lg hover:bg-hover"
              aria-label="menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-panel max-h-[80vh] overflow-y-auto">
          <div className="p-3 space-y-1">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-muted hover:bg-hover"
            >
              Home
            </Link>
            {hookCategories.map((cat) => (
              <div key={cat.slug}>
                <button
                  onClick={() =>
                    setMobileGroup(mobileGroup === cat.slug ? null : cat.slug)
                  }
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-muted hover:bg-hover"
                >
                  <span className="text-sm">{cat.name}</span>
                  <span className="text-xs text-dim">
                    {mobileGroup === cat.slug ? "−" : "+"}
                  </span>
                </button>
                {mobileGroup === cat.slug && (
                  <div className="pl-3 border-l border-line ml-3 mt-1 space-y-0.5">
                    {cat.items.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/hooks/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm font-mono text-cyan-600 dark:text-cyan-300 hover:bg-hover rounded-md"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}