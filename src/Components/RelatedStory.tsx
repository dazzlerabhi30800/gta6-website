import storyData from "./data/relatedStories.json";

export default function RelatedStory() {
  return (
    <section className="section story--section" id="story">
      <h1>Related Stories</h1>
      <div className="stories--wrapper">
        {storyData.map((story: storyType, index: number) => (
          <div className="story" key={index}>
            <img src={story.img} alt={story.title} />
            <p>
              GTA Online <span className="time">{story.time}</span>
            </p>
            <h2>{story.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
