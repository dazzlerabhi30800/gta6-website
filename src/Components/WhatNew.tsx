import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import DOMPurify from "dompurify";
import data from "./data/newData.json";

export default function WhatNewSection() {
  const [client, setClient] = useState<boolean>(false);
  const sanitizeData = (data: string) => ({
    __html: DOMPurify.sanitize(data),
  });
  useEffect(() => {
    let timeout = setTimeout(() => setClient(true), 1000);
    if (!client) return;
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
    return () => clearTimeout(timeout);
  }, [client]);
  return (
    <section className="section new--section">
      <h1>What's New</h1>
      <div className="new--comp one">
        <div className="new--info">
          <h2>New Characters</h2>
          <p dangerouslySetInnerHTML={sanitizeData(data.desc1)}></p>
        </div>
      </div>
      <div className="new--comp two">
        <div className="new--info">
          <h2>Back to Miami Baby!!</h2>
          <p dangerouslySetInnerHTML={sanitizeData(data.desc2)}></p>
        </div>
      </div>
      <div className="new--comp three">
        <div className="new--info">
          <h2>Released Platforms</h2>
          <p dangerouslySetInnerHTML={sanitizeData(data.desc3)}></p>
          <p dangerouslySetInnerHTML={sanitizeData(data.desc4)}></p>
        </div>
      </div>
    </section>
  );
}
