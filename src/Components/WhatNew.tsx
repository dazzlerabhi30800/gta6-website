import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import DOMPurify from "dompurify";
import data from "./data/newData.json";
import parser from "html-react-parser";

export default function WhatNewSection() {
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    let timeout = setTimeout(() => setLoad(true), 1000);
    if (!load) return;
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
            start: "0% 75%",
            end: "bottom 100%",
          },
        },
      );
    });
    return () => clearTimeout(timeout);
  }, [load]);
  return (
    <section className="section new--section" id="new">
      <h1>What's New</h1>
      <div className="new--comp one">
        <div className="new--info">
          <h2>New Characters</h2>
          <p>{parser(DOMPurify.sanitize(data.desc1))}</p>
        </div>
      </div>
      <div className="new--comp two">
        <div className="new--info">
          <h2>Back to Miami Baby!!</h2>
          <p>{parser(DOMPurify.sanitize(data.desc2))}</p>
        </div>
      </div>
      <div className="new--comp three">
        <div className="new--info">
          <h2>Released Platforms</h2>
          <p>{parser(DOMPurify.sanitize(data.desc3))}</p>
          <p>{parser(DOMPurify.sanitize(data.desc4))}</p>
        </div>
      </div>
    </section>
  );
}
