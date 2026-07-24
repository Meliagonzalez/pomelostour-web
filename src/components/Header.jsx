import { useEffect, useState } from "react";
import logo from "../assets/logo-optimized.webp";

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
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-black/50 backdrop-blur-md"
      }`}
    >
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
              className={`rounded text-gray-200 hover:text-white transition-colors duration-150 ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#reserva"
          className={`hidden lg:inline-flex bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-bold transition-all duration-200 ${focusRing}`}
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
              className={`rounded text-gray-200 transition-colors duration-150 ${focusRing}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#reserva"
            className={`bg-brand text-white text-center py-3 rounded-full font-bold transition-all duration-200 mt-2 ${focusRing}`}
            onClick={() => setMenuOpen(false)}
          >
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
}
