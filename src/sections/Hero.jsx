import heroDesktop from "../assets/images/optimized/hero-desktop.webp";
import heroMobile from "../assets/images/optimized/hero-mobile.webp";
import heroFallback from "../assets/images/optimized/hero-fallback.jpg";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-[85vh] max-w-7xl items-end px-6 pb-16 lg:px-12 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-brand">
            Rafting en San Martín de los Andes
          </span>

          <h1 className="mb-5 text-balance text-6xl font-black uppercase leading-tight text-white md:text-8xl">
            Rafting en el Río Chimehuín
          </h1>

          <p className="mb-6 max-w-xl text-lg leading-relaxed text-slate-200">
            La mejor experiencia de rafting en San Martín de los Andes,
            a los pies del Volcán Lanín.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#reserva"
              className="rounded-full bg-brand px-8 py-4 font-bold text-white transition-all duration-200 hover:bg-brand-dark"
            >
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
    </section>
  );
}