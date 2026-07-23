import { useState } from "react";
import logo from "../assets/logo.png";

const links = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Reserva", href: "#reserva" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Río", href: "#rio" },
  { label: "Galería", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 rounded-lg ${focusRing}`}>
          <img
            src={logo}
            alt="Pomelostour"
            className="h-40 w-auto"
          />

          <div>
            <p className="text-white font-bold text-xl">
              Pomelostour
            </p>
            <p className="text-xs text-gray-300">
              Rafting Río Chimehuín
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded text-gray-200 hover:text-white transition ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#reserva"
          className={`hidden lg:inline-flex bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-medium transition ${focusRing}`}
        >
          Reservar
        </a>

        {/* Mobile Button */}
        <button
          className={`lg:hidden rounded p-1 text-white ${focusRing}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden bg-slate-900 border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`rounded text-gray-200 ${focusRing}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reserva"
            className={`bg-pink-500 text-white text-center py-3 rounded-full font-medium mt-2 ${focusRing}`}
            onClick={() => setMenuOpen(false)}
          >
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
}
