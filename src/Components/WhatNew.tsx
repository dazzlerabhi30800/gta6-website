import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function WhatNewSection() {
  useEffect(() => {
    document.querySelectorAll(".new--comp").forEach((comp) => {
      gsap.fromTo(
        comp,
        { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(i, 6)" },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(i, 6)",
          scrollTrigger: {
            trigger: comp,
            start: "0% 71%",
            end: "bottom 100%",
          },
        },
      );
    });
  }, []);
  return (
    <section className="section new--section">
      <h1>What's New</h1>
      <div className="new--comp one">
        <div className="new--info">
          <h2>New Characters</h2>
          <p>
            For the first time in the{" "}
            <span className="highlight--text">Grand Theft Auto</span>{" "}
            introducing a femail protoganist. Players can play both as a male &
            female. Male Character name is{" "}
            <span className="highlight--text">Jason</span> & female named{" "}
            <span className="highlight--text">Lucia</span>.<br />
            GTA 6’s main protagonists, Lucia and Jason, seem inspired by{" "}
            <span className="highlight--text">Bonnie and Clyde</span>. In 1930s
            America, Bonnie Parker and Clyde Barrow were known as the robbery
            duo who were responsible for a two-year crime spree. While it’s
            unlikely that GTA 6 will bring the criminal couple’s story into the
            game, there are already echoes of their crime. We see the official
            trailer ending with Lucia and Jason about to rob a store. We also
            have rumors that the game will begin with Lucia breaking out of
            prison after she was arrested for robbing a bank.
          </p>
        </div>
      </div>
      <div className="new--comp two">
        <div className="new--info">
          <h2>Back to Miami Baby!!</h2>
          <p>
            <span className="highlight--text">Grand Theft Auto 6</span> will be
            set in Vice City, the GTA version of Miami. That location was
            previously explored in 2002’s{" "}
            <span className="highlight--text">Grand Theft Auto: Vice City</span>{" "}
            and that game’s 2006 prequel{" "}
            <span className="highlight--text">
              Grand Theft Auto: Vice City Stories
            </span>
            . Those entries were set during the mid-1980s, but GTA 6 will
            reportedly tell a modern-day, Bonnie and Clyde-inspired story
            featuring two leads named Jason and Lucia, based on early gameplay
            videos. Lucia would be the GTA series’ first female lead playable
            protagonist in a mainline game.
          </p>
        </div>
      </div>
      <div className="new--comp three">
        <div className="new--info">
          <h2>Released Platforms</h2>
          <p>
            GTA publisher Take-Two Interactive announced that{" "}
            <span className="highlight--text">Grand Theft Auto 6</span>
            will come to PlayStation 5 and Xbox Series X in 2025. A PC version
            has not been announced. That’s not uncommon for Grand Theft Auto
            games, though; the series has had staggered releases on consoles and
            PC, and the lack of an announced PC version certainly doesn’t rule
            one out at this point.
          </p>
          <p>
            There’s another potential platform coming that could be home to
            <span className="highlight--text">
              Grand Theft Auto 6: Nintendo’s
            </span>{" "}
            Switch successor. Rockstar has embraced the Switch with releases
            like{" "}
            <span className="highlight--text">
              L.A. Noire, Red Dead Redemption,
            </span>{" "}
            and{" "}
            <span className="highlight--text">
              Grand Theft Auto: The Trilogy — The Definitive Edition
            </span>
            , so don’t rule out an eventual release of GTA 6 on Switch 2.
          </p>
        </div>
      </div>
    </section>
  );
}
