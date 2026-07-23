import Reveal from "../components/Reveal";
import riverImage from "../assets/images/Todas/DJI_0018.jpg";

export default function River() {
  return (
    <section id="rio" className="scroll-mt-28 bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        <Reveal className="overflow-hidden rounded-3xl">
          <img
            src={riverImage}
            alt="Vista aérea del Río Chimehuín serpenteando entre bosques, con el Volcán Lanín de fondo"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={100}>
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
              Patagonia
            </p>

            <h2 className="mb-6 text-4xl font-black text-slate-900 md:text-5xl">
              El Río Chimehuín
            </h2>

            <p className="mb-6 text-lg text-slate-600">
              Navegá uno de los ríos más emblemáticos de la Patagonia argentina,
              rodeado de bosques, montañas y paisajes únicos.
            </p>

            <p className="mb-6 text-slate-600">
              Nuestra experiencia combina aventura, naturaleza y diversión en un
              entorno privilegiado a pocos minutos de San Martín de los Andes.
            </p>

            <p className="text-slate-600">
              Próximamente agregaremos más información sobre el recorrido,
              duración y puntos destacados de la navegación.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
