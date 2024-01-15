import OnlineComp from "./OnlineComp";
import onlineData from "./data/onlineData.json";
import { useRef } from "react";

export default function OnlineSection() {
  const postRef = useRef<HTMLDivElement | any>();
  return (
    <section className="section online--section" id="post">
      <h1>GTA6 Online</h1>
      <div ref={postRef} className="post--wrapper">
        {onlineData.map((item: postType, index: number) => {
          return <OnlineComp key={index} item={item} postRef={postRef} />;
        })}
      </div>
    </section>
  );
}
