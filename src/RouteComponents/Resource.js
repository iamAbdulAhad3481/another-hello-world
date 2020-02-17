import React from "react";

function Resource({ match, topic }) {
  const subTopic = topic.resources.find(sub => sub.id === match.params.subId);
  
  return (
    <div>
      <h1>{subTopic.name}</h1>
      <p>{subTopic.description}</p>
      <a href={`${subTopic.url}`}>More Info</a>
    </div>
  );
}
export default Resource;
