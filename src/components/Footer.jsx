const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center gap-4 text-center">

          <h3 className="text-2xl font-bold">
            Pomelostour
          </h3>

          <p className="text-slate-400">
            Rafting Río Chimehuín · San Martín de los Andes · Patagonia Argentina
          </p>

          <div className="flex gap-6">

            <a
              href="https://api.whatsapp.com/send/?phone=5492944802156"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded text-slate-300 hover:text-pink-500 ${focusRing}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.06.81.82-2.99-.2-.31a8.1 8.1 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.14-8.14 4.48 0 8.13 3.65 8.13 8.14 0 4.49-3.65 8.15-8.14 8.15Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/pomelostour/"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded text-slate-300 hover:text-pink-500 ${focusRing}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>

          </div>

          <div className="h-px w-full max-w-xl bg-slate-800" />

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Pomelostour. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}
