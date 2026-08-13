import Reveal from "../components/Reveal";
import riverImage from "../assets/images/optimized/river.webp";

export default function River() {
  return (
    <section id="rio" className="scroll-mt-28 bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <Reveal className="overflow-hidden rounded-2xl">
          <img
            src={riverImage}
            alt="Vista aérea del Río Chimehuín serpenteando entre bosques, con el Volcán Lanín de fondo"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
              Patagonia
            </p>

            <h2 className="mb-6 text-balance text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              El Río Chimehuín
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Navegá uno de los ríos más emblemáticos de Neuquen en la Patagonia Argentina,
              rodeado de bosques, montañas y paisajes únicos.
            </p>

            <p className="mb-6 leading-relaxed text-slate-600">
              Nuestra experiencia combina aventura, naturaleza y diversión en un
              entorno privilegiado a pocos minutos de San Martín de los Andes.
            </p>

            <p className="leading-relaxed text-slate-600">
              Nace en el Lago Huechulafquen y recorre bosques andino-patagónicos
              con el Volcán Lanín de fondo. Aguas cristalinas de 16 a 18°C,
              nivel de dificultad medio en primavera y bajo-medio en verano.
              Incluye el rápido Garganta del Diablo, exclusivo de Pomelostour.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xl font-black text-slate-900">Clase II+</p>
                <p className="text-sm text-slate-500">Dificultad</p>
              </div>

              <div>
                <p className="text-xl font-black text-slate-900">16–18°C</p>
                <p className="text-sm text-slate-500">Temperatura del agua</p>
              </div>

              <div>
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
