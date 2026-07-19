import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Capabilities from "./components/sections/Capabilities";
import PrintProcess from "./components/sections/PrintProcess";
import Values from "./components/sections/Values";
import Clients from "./components/sections/Clients";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Ticker />

      <About />

      <Services />

      <Capabilities />

      <PrintProcess />

      <Values />

      <Clients />

      <Contact />

      <Footer />
    </>
  );
}

export default App;