import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OnlineComp({
  item,
  postRef,
}: {
  item: postType;
  postRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  useEffect(() => {
    let children = postRef.current?.children;
    if (!children) return;
    Object.values(children).forEach((container) => {
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
            markers: true,
            start: "0% 71%",
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
