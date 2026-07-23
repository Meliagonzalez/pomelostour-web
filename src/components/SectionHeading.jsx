export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <>
      <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-pink-500">
        {eyebrow}
      </p>

      <h2 className="mb-6 text-center text-4xl font-black text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-600">
          {description}
        </p>
      )}
    </>
  );
}
