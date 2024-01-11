import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";
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
        <Footer />
      </main>
    </>
  );
}

export default App;
