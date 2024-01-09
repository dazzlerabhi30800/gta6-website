import { useEffect } from "react";
import img1 from "/images/gta6-billboard.jpg";
import img2 from "/images/gta6-city.jpg";
import gsap from "gsap";

export default function AboutSection() {
  useEffect(() => {
    gsap.fromTo(
      ".section--heading",
      { x: "-500%", duration: 3 },
      {
        x: 0,
        scrollTrigger: {
          trigger: ".section--heading",
          start: "top 90%",
          end: "bottom 100%",
        },
      },
    );
    document
      .querySelectorAll(".info--container")
      .forEach((container, index) => {
        gsap.fromTo(
          container,
          {
            x: (index + 1) % 2 == 0 ? "-300%" : "300%",
            opacity: 0,
            duration: 1 * (index + 1),
          },
          {
            x: 0,
            opacity: 1,
            ease: "elastic.out(i, 1)",
            duration: 2,
            scrollTrigger: {
              trigger: container,
              start: `0% 83%`,
              end: "bottom 100%",
            },
          },
        );
      });
  }, []);
  return (
    <section className="section about--section">
      <h1 className="section--heading">About this Game</h1>
      <div className="info--container">
        <img src={img1} alt="gta6" />
        <h2>
          GTA 6 is all set to come out in{" "}
          <span className="highlight--text">2025</span>. Let's head back to the
          city of neon light & beaches, yes baby we are talking about{" "}
          <span className="highlight--text">Vice City.</span>
        </h2>
      </div>
      <div className="info--container">
        <img src={img2} alt="Vice City" />
        <h2>
          One last ride into crime realm of{" "}
          <span className="highlight--text">Vice City</span>, Rule the
          streets,Conquer the Chaos: GTA6, Where crime meets Next-Gen. This next
          entry in the Grand Theft Auto Franchise will set a benchmark in the
          world of Gaming.
        </h2>
      </div>
    </section>
  );
}
