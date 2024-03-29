import { useEffect, useState } from "react";
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
  const [client, setClient] = useState<boolean>(false);
  useEffect(() => {
    let children = postRef.current?.children;
    let timeout = setTimeout(() => {
      setClient(true);
    }, 1000);
    if (!children || !client) return;
    Object.values(children).forEach((container) => {
      gsap.fromTo(
        container.querySelector(".post"),
        { scaleY: 0, opacity: 0, duration: 1 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(i, 1)",
          scrollTrigger: {
            trigger: container.querySelector(".post"),
            start: "0% 71%",
            end: "bottom 100%",
          },
        },
      );
    });
    return () => clearTimeout(timeout);
  }, [client]);
  return (
    <div className="post--container">
      {item.img && <img src={item.img} alt={item.title} />}
      <div className="post">
        <h2>{item.title}</h2>
        {item.description.map((desc: string, index: number) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
