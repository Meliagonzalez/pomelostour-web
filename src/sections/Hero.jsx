import heroDesktop from "../assets/images/optimized/hero-desktop.webp";
import heroMobile from "../assets/images/optimized/hero-mobile.webp";
import heroFallback from "../assets/images/optimized/hero-fallback.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen */}
      <picture>
        <source media="(max-width: 768px)" srcSet={heroMobile} type="image/webp" />
        <source media="(min-width: 769px)" srcSet={heroDesktop} type="image/webp" />
        <img
          src={heroFallback}
          alt="Rafting en el Río Chimehuín, San Martín de los Andes"
          className="absolute inset-0 h-full w-full object-cover object-top"
          style={{ objectPosition: "center 28%" }}
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Contenido: altura mínima (no fija) para que crezca si el texto no entra; pt-28 deja libre el navbar fijo */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-12 pt-28 lg:px-12 md:pb-16 sm:min-h-[max(72vh,560px)]">
        <div className="max-w-2xl animate-fade-up">
          {/* Badges */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-yellow-400" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9 en Google · +3.000 reseñas
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm ring-1 ring-white/20">
              +25 años de experiencia
            </span>
          </div>

          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-brand">
            Rafting en San Martín de los Andes
          </span>

          <h1 className="mb-4 text-balance text-6xl font-black uppercase leading-tight text-white md:text-7xl">
            Rafting en el Río Chimehuín
          </h1>

          <p className="mb-6 max-w-xl text-lg leading-relaxed text-slate-200">
            La mejor experiencia de rafting premium en San Martín de los Andes,
            a los pies del Volcán Lanín.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#reserva"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-bold text-white shadow-lg shadow-brand/30 transition-all duration-200 hover:scale-[1.03] hover:bg-brand-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.06a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.06.81.82-2.99-.2-.31a8.1 8.1 0 0 1-1.25-4.34c0-4.49 3.65-8.14 8.14-8.14 4.48 0 8.13 3.65 8.13 8.14 0 4.49-3.65 8.15-8.14 8.15Zm4.47-6.1c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              Reservar por WhatsApp
            </a>

            <a
              href="#experiencia"
              className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black"
            >
              Ver experiencia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experiencia"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 md:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Descubrí más</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-5 w-5 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}