import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";
import { reviews, GOOGLE_PROFILE_URL, GOOGLE_WRITE_REVIEW_URL } from "../data/reviews";
import bgImage from "../assets/images/optimized/dji-0026.webp";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

// Rating y cantidad de reseñas: datos reales confirmados por el cliente (Google Maps).
const GOOGLE_RATING = "4.9";
const GOOGLE_REVIEW_COUNT = "+3.000";

function GoogleSummary() {
  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`mx-auto flex w-fit flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full bg-white px-6 py-3 shadow-sm ring-1 ring-slate-200 transition-shadow duration-200 hover:shadow-md ${focusRing}`}
    >
      <img src="/google-logo.svg" alt="Google" className="h-5 w-auto" />
      <StarRating rating={5} size="h-5 w-5" />
      <span className="text-lg font-bold text-slate-900">{GOOGLE_RATING}</span>
      <span className="text-sm text-slate-500">· {GOOGLE_REVIEW_COUNT} reseñas</span>
    </a>
  );
}

function ReviewButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <a
        href={GOOGLE_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3 font-semibold text-slate-900 shadow-lg transition-colors duration-150 hover:bg-slate-100 sm:w-auto ${focusRing}`}
      >
        Leer más reseñas en Google
      </a>
      <a
        href={GOOGLE_WRITE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10 sm:w-auto ${focusRing}`}
      >
        Dejar una reseña
      </a>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="opiniones" className="scroll-mt-28 bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Opiniones"
          title="Lo que dicen nuestros visitantes"
          description="Más de 25 años llevando familias, parejas y grupos a vivir el Chimehuín."
        />

        <Reveal className="-mt-4 mb-10 md:mb-12">
          <GoogleSummary />
        </Reveal>

        {reviews.length > 0 && (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {reviews.map((review, index) => (
              <Reveal key={review.author} delay={(index % 2) * 100} className="h-full">
                <ReviewCard {...review} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mx-auto mt-12 max-w-5xl md:mt-16">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={bgImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/75" />

            <div className="relative px-6 py-10 text-center sm:px-10 sm:py-12">
              <p className="text-2xl font-bold text-white md:text-3xl">
                ¿Ya bajaste el Chimehuín con nosotros?
              </p>
              <p className="mx-auto mt-3 mb-8 max-w-xl leading-relaxed text-slate-300">
                Leé todas las opiniones en Google o contá tu propia experiencia.
              </p>
              <ReviewButtons />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
