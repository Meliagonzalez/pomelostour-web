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
              href="https://wa.me/5492944802156"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-pink-500"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/pomelostour/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-pink-500"
            >
              Instagram
            </a>

          </div>

          <div className="h-px w-full max-w-xl bg-slate-800" />

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Pomelostour. Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  );
}