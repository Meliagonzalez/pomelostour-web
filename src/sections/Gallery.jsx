import FadeCarousel from "../components/FadeCarousel";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import raftingRapido from "../assets/images/optimized/rafting-rapido.webp";
import olaBalsa4 from "../assets/images/optimized/ola-balsa-4.webp";
import aerialRafts from "../assets/images/optimized/dji-0026.webp";
import familia from "../assets/images/optimized/famil.webp";
import saltoBalsa from "../assets/images/optimized/salto-balsa.webp";
import remosArriba from "../assets/images/optimized/remos-arriba.webp";
import plantelRafting from "../assets/images/optimized/plantel-river-rafting.webp";
import deckRafting from "../assets/images/optimized/deck-rafting.webp";
import martinPescador from "../assets/images/optimized/martin-pescador.webp";
import grupoSendero from "../assets/images/optimized/grupo-sendero.webp";
import drone0001 from "../assets/images/optimized/drone-0001.webp";
import drone0011 from "../assets/images/optimized/drone-0011.webp";
import drone0030 from "../assets/images/optimized/drone-0030.webp";
import drone0031 from "../assets/images/optimized/drone-0031.webp";
import drone0033 from "../assets/images/optimized/drone-0033.webp";
import drone0046 from "../assets/images/optimized/drone-0046.webp";
import drone0051 from "../assets/images/optimized/drone-0051.webp";
import drone0061 from "../assets/images/optimized/drone-0061.webp";
import drone0062 from "../assets/images/optimized/drone-0062.webp";
import drone0063 from "../assets/images/optimized/drone-0063.webp";
import drone0064 from "../assets/images/optimized/drone-0064.webp";
import drone0075 from "../assets/images/optimized/drone-0075.webp";
import drone0076 from "../assets/images/optimized/drone-0076.webp";
import drone0093 from "../assets/images/optimized/drone-0093.webp";
import drone0096 from "../assets/images/optimized/drone-0096.webp";
import drone0099 from "../assets/images/optimized/drone-0099.webp";
import drone0102 from "../assets/images/optimized/drone-0102.webp";

// Fotos desde el río y desde el drone, intercaladas para variar el ritmo.
const photos = [
  { alt: "Bote atravesando un rápido del Río Chimehuín", src: raftingRapido },
  { alt: "Vista cenital de balsas de rafting sobre el agua cristalina del Chimehuín", src: drone0031 },
  { alt: "Grupo de rafting con casco, chaleco salvavidas y traje de neoprene caminando por el sendero junto al guía", src: grupoSendero },
  { alt: "Balsa de rafting saltando entre las olas de un rápido en el Río Chimehuín", src: olaBalsa4 },
  { alt: "Balsas de rafting descendiendo un rápido del Chimehuín, vistas desde el drone", src: drone0062 },
  { alt: "Familia disfrutando el rafting junto al Volcán Lanín", src: familia },
  { alt: "Vista aérea del Lago Huechulafquen y el Volcán Lanín, donde nace el Río Chimehuín", src: drone0011 },
  { alt: "Balsa con remeros atravesando las olas blancas de un rápido del Chimehuín", src: drone0063 },
  { alt: "Pasajero saltando al agua después de un descenso de rafting", src: saltoBalsa },
  { alt: "Grupo de balsas navegando las aguas turquesas del Chimehuín, vista desde el drone", src: drone0030 },
  { alt: "Remos en alto celebrando un descenso de rafting en el Chimehuín", src: remosArriba },
  { alt: "Vista aérea de balsas de rafting navegando el Río Chimehuín", src: aerialRafts },
  { alt: "Rápidos del Río Chimehuín entre la vegetación, con el Volcán Lanín al fondo", src: drone0046 },
  { alt: "Balsa de rafting entre la espuma de un rápido del Chimehuín", src: drone0064 },
  { alt: "Grupo de rafting festejando arriba de la balsa con Pomelostour", src: plantelRafting },
  { alt: "Balsas en fila descendiendo el Río Chimehuín entre la estepa", src: drone0033 },
  { alt: "Balsas junto a una gran roca a orillas del Chimehuín, con la cordillera de fondo", src: drone0075 },
  { alt: "Vista del deck de la base de Pomelostour, con el Lago Huechulafquen y el Volcán Lanín", src: deckRafting },
  { alt: "Varias balsas descendiendo un rápido del Chimehuín, vista aérea", src: drone0061 },
  { alt: "Rápido de aguas blancas del Río Chimehuín visto desde el aire", src: drone0096 },
  { alt: "Martín pescador, fauna típica del Río Chimehuín", src: martinPescador },
  { alt: "Balsas de rafting en la orilla del río, listas para salir", src: drone0099 },
  { alt: "Rápido del Chimehuín junto a una formación rocosa, con la estepa y la cordillera", src: drone0076 },
  { alt: "Curva tranquila del Río Chimehuín rodeada de bosque", src: drone0051 },
  { alt: "Vista cenital de balsas en la orilla del río junto a la camioneta de traslado", src: drone0093 },
  { alt: "Vista aérea del Lago Huechulafquen con el Volcán Lanín y la cordillera", src: drone0001 },
  { alt: "Lago Huechulafquen y Volcán Lanín desde el aire, con el comienzo del Río Chimehuín", src: drone0102 },
];

export default function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-28 bg-slate-50 py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          eyebrow="Galería"
          title="Viví la aventura"
          description="Algunas imágenes reales de la experiencia en el Río Chimehuín."
        />

        <Reveal>
          <FadeCarousel
            photos={photos}
            label="Galería de fotos del rafting en el Río Chimehuín"
            interval={2500}
            className="aspect-[4/3] rounded-3xl shadow-lg sm:aspect-[16/9]"
          />
        </Reveal>

      </div>
    </section>
  );
}
