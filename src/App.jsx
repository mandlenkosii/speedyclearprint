import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Ticker from "./components/sections/Ticker";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Capabilities from "./components/sections/Capabilities";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Ticker />

      <About />

      <Services />
      <Capabilities />
    </>
  );
}

export default App;