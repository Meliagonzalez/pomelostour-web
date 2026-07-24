import Reveal from "../components/Reveal";

const items = [
  "+25 años de experiencia",
  "Guías certificados IRF",
  "Garganta del Diablo exclusiva",
  "Apto desde 6 años",
];

export default function TrustBar() {
  return (
    <section className="bg-slate-950 py-6">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 text-center text-sm font-medium text-slate-200 sm:text-base">
          {items.map((item, index) => (
            <span key={item} className="flex items-center gap-x-3">
              {item}
              {index < items.length - 1 && (
                <span className="text-brand" aria-hidden="true">·</span>
              )}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
