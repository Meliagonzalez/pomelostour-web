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
      <Header />
      <Hero />
      <ExperienceTimeline />
      <Reservation />
      <Safety />
      <River />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}