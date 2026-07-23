import Header from "./components/Header";
import Hero from "./sections/Hero";
import ExperienceTimeline from "./sections/ExperienceTimeline";
import Reservation from "./sections/Reservation";
import Safety from "./sections/Safety";
import River from "./sections/River";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";



export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-pink-500 focus:px-6 focus:py-3 focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="main">
        <Hero />
        <ExperienceTimeline />
        <Reservation />
        <Safety />
        <River />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}