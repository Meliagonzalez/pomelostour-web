import Reveal from "../components/Reveal";
import riverImage from "../assets/images/optimized/river.webp";

export default function River() {
  return (
    <section id="rio" className="scroll-mt-28 bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <Reveal className="group relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src={riverImage}
            alt="Vista aérea del Río Chimehuín serpenteando entre bosques, con el Volcán Lanín de fondo"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:aspect-[4/3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-white backdrop-blur-md ring-1 ring-white/20">
            <span className="text-lg font-black">Garganta del Diablo</span>
            <span className="text-sm text-white/80">· rápido exclusivo Pomelostour</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Patagonia
            </p>

            <h2 className="mb-4 text-balance text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              El Río Chimehuín
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-slate-600">
              Navegá uno de los ríos más emblemáticos de Neuquen en la Patagonia Argentina,
              rodeado de bosques, montañas y paisajes únicos.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              Nuestra experiencia combina aventura, naturaleza y diversión en un
              entorno privilegiado a pocos minutos de San Martín de los Andes.
            </p>

            <p className="leading-relaxed text-slate-600">
              Nace en el Lago Huechulafquen y recorre bosques andino-patagónicos
              con el Volcán Lanín de fondo. Aguas cristalinas de 16 a 18°C,
              nivel de dificultad medio en primavera y bajo-medio en verano.
              Incluye el rápido Garganta del Diablo, exclusivo de Pomelostour.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xl font-black text-slate-900">Clase II+</p>
                <p className="text-sm text-slate-500">Dificultad</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xl font-black text-slate-900">16–18°C</p>
                <p className="text-sm text-slate-500">Temperatura del agua</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xl font-black text-slate-900">Garganta del Diablo</p>
                <p className="text-sm text-slate-500">Rápido exclusivo</p>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
