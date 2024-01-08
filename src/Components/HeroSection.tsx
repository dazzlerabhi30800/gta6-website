import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero--section">
      <Navbar />
      <div className="hero--wrapper">
        <h1>welcome to leonida</h1>
        <p>
          Grand theft Auto VI heads to the state of Lenoida, a home neon-soaked
          streets of Vice City and beyond in the biggest, most immersive
          evolution of the Grand Theft Auto series yet. Coming 2025 to
          playstation 5 & Xbox series X|S.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://www.youtube.com/watch?v=QdBZY2fkU-0&list=TLGGLWZTdZua_3AwODAxMjAyNA&t=1s",
            )
          }
          className="trailer--btn"
        >
          <FaPlay />
          Watch Trailer
        </button>
      </div>
    </section>
  );
}
