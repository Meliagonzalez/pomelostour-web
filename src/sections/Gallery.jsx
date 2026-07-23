const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4",
  "https://picsum.photos/600/400?random=5",
  "https://picsum.photos/600/400?random=6",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-28 bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
          Galería
        </p>

        <h2 className="mb-6 text-center text-5xl font-black text-slate-900">
          Viví la aventura
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          Algunas imágenes representativas de la experiencia.
          Próximamente reemplazaremos estos placeholders por fotografías reales.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Galería ${index + 1}`}
                loading="lazy"
                className="
                  h-72
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-110
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}