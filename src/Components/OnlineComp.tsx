
export default function OnlineComp({item}: {item: postType}) {
  return (
    <div className="post--container">
      <img src={item.img} alt={item.title} />
      <div className="post">
        <h2>{item.title}</h2>
        {item.description.map((desc: string, index: number) => (
          <p key={index}>
            {desc}
          </p>
        ))}
        
      </div>
    </div>
  );
}
