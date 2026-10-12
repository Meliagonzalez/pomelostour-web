import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Hero from "./sections/Hero";
import TrustBar from "./sections/TrustBar";
import River from "./sections/River";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import OurBase from "./sections/OurBase";
import Equipment from "./sections/Equipment";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Reservation from "./sections/Reservation";
import Faq from "./sections/Faq";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-6 focus:py-3 focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustBar />
        <River />
        <ExperienceTimeline />
        <OurBase />
        <Equipment />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Faq />
      </main>

      <Footer />

      <WhatsAppFloatingButton />
    </>
  );
}
