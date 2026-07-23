export default function River() {
  return (
    <section
      id="rio"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">

        {/* Imagen placeholder */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Río Chimehuín"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Texto */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
            Patagonia
          </p>

          <h2 className="mb-6 text-5xl font-black text-slate-900">
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

      </div>
    </section>
  );
}