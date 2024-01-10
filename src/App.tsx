import AboutSection from "./Components/AboutSection";
import HeroSection from "./Components/HeroSection";
import OnlineSection from "./Components/OnlineSection";
import RelatedStory from "./Components/RelatedStory";
import "./styles/style.scss";

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <OnlineSection />
        <RelatedStory />
      </main>
    </>
  );
}

export default App;
