import { useEffect } from "react";
import { gsap } from "gsap";

export default function OnlineComp({ item }: { item: postType }) {
  useEffect(() => {
    document.querySelectorAll(".post").forEach((container) => {
      gsap.fromTo(
        container,
        { scaleX: 0, opacity: 0, duration: 1 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(i, 1)",
          scrollTrigger: {
            trigger: container,
            start: "0% 83%",
            end: "bottom 100%",
          },
        },
      );
    });
  }, []);
  return (
    <div className="post--container">
      <img src={item.img} alt={item.title} />
      <div className="post">
        <h2>{item.title}</h2>
        {item.description.map((desc: string, index: number) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
