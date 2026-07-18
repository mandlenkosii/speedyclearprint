import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Capabilities from "./components/sections/Capabilities";
import Values from "./components/sections/Values";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Ticker />

      <About />

      <Services />
      <Capabilities />
      <Values />
    </>
  );
}

export default App;