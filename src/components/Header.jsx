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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
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
              className="text-gray-200 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#reserva"
          className="hidden lg:inline-flex bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-2 rounded-full font-medium transition"
        >
          Reservar
        </a>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-slate-900 border-t border-white/10">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#reserva"
              className="bg-fuchsia-600 text-white text-center py-3 rounded-full font-medium mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}