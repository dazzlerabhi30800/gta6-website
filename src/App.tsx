import AboutSection from "./Components/AboutSection";
import HeroSection from "./Components/HeroSection";
import OnlineSection from "./Components/OnlineSection";
import "./styles/style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <OnlineSection />
      </main>
    </>
  );
}

export default App;
