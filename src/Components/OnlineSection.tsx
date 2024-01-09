import OnlineComp from './OnlineComp';
import onlineData from './data/onlineData.json';

export default function OnlineSection() {
  return (
    <section className="section online--section">
      <h1>GTA6 Online</h1>
      <div className="post--wrapper">
        {onlineData.map((item: postType, index: number) => {
          return <OnlineComp key={index} item={item} />
        })}
      </div>
    </section>
  );
}
