// Provides global navigation, theme switching, and the mobile menu.
// useState is used because the mobile drawer opens/closes interactively.

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Trainers", to: "/trainer" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-500/20 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-black tracking-[0.18em] text-white sm:text-2xl"
        >
          IRON<span className="text-orange-500">FORGE</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${location.pathname === link.to ? "bg-orange-500/15 text-orange-400" : "text-gray-300 hover:bg-white/5 hover:text-orange-400"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
          >
            Join Now
          </Link>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 text-orange-400 transition hover:bg-orange-500/10"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-500/30 text-orange-400"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu lg:hidden ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-[#111111]/95 p-3 shadow-2xl">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${location.pathname === link.to ? "bg-orange-500/15 text-orange-400" : "text-gray-300 hover:bg-white/5"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
