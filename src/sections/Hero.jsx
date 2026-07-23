import heroImage from "../assets/images/Todas/DJI_0053.jpg";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Imagen */}
      <img
        src={heroImage}
        alt="Rafting en el Río Chimehuín"
        className="absolute inset-0 h-full w-full object-cover object-top"
        style={{ objectPosition: "center 28%" }}
        fetchPriority="high"
        decoding="async"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-[85vh] max-w-7xl items-end px-6 pb-16 lg:px-12 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-pink-500">
            Rafting en San Martín de los Andes
          </span>

          <h1 className="mb-5 text-6xl font-black uppercase text-white md:text-8xl">
            Rafting rio Chimehuín
          </h1>

          <p className="mb-6 max-w-xl text-lg text-slate-200">
            Viví la aventura del rafting en el Río Chimehuín, rodeado por algunos
            de los paisajes más increíbles de la Patagonia.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#reserva"
              className="rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="#experiencia"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Ver experiencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}