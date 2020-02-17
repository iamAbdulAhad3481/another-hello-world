import React from "react";
import { Link, Route } from "react-router-dom";
import Resource from "./Resource";

function Topic({ match, topics }) {
  const topic = topics.find(topic => topic.id === match.params.topicId);

  return (
    <div>
      <h1>{topic.name}</h1>
      <p>{topic.description}</p>
      {topic.resources.map(sub => (
        <li key={sub.id}>
          <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
        </li>
      ))}
      <hr />
      <Route
        path={`${match.path}/:subId`}
        render={props => <Resource {...props} topic={topic} />}
      />
    </div>
  );
}

export default Topic;
