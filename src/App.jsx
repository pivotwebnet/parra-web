import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickBooking from "./components/QuickBooking";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import HotelTour from "./components/HotelTour";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickBooking />
        <About />
        <Amenities />
        <Gallery />
        <HotelTour />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
