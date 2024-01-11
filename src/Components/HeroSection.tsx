import Navbar from "./Navbar";
import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { gsap } from "gsap";

export default function HeroSection() {
  useEffect(() => {
    gsap.fromTo(
      ".hero--wrapper h1",
      { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(i, 4)" },
      { scale: 1, opacity: 1, duration: 1 },
    );
    gsap.fromTo(
      ".hero--wrapper p",
      { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(i, 4)" },
      { scale: 1, opacity: 1, duration: 1 },
    );
    gsap.fromTo(
      ".trailer--btn",
      { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(i, 4)" },
      { scale: 1, opacity: 1, duration: 1 },
    );
  });
  return (
    <section className="hero--section" id="home">
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
