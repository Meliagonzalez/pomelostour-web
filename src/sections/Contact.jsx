export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-28 bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-pink-500">
          Contacto
        </p>

        <h2 className="mb-6 text-5xl font-black text-slate-900">
          ¿Listo para vivir la experiencia?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-slate-600">
          Contactanos por WhatsApp o seguinos en Instagram para conocer
          novedades, fotos y disponibilidad.
        </p>

        <div className="flex flex-col items-center gap-4">

          <a
            href="https://wa.me/5492944802156"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              rounded-full
              bg-pink-500
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-pink-600
            "
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/pomelostour/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-700 hover:text-pink-500"
          >
            @pomelostour
          </a>

        </div>

      </div>
    </section>
  );
}