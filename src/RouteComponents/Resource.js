import React from "react";

function Resource({ match, topics }) {
  const topic = topics
    .find(topic => topic.id === match.params.topicId)
    .resources.find(sub => sub.id === match.params.subId);
  console.log(topic);
  return (
    <div>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      <a href={`${topic.url}`}>More Info</a>
    </div>
  );
}

export default Resource;
