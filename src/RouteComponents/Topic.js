import React from 'react'
import { Link, Route } from 'react-router-dom'
import Resource from './Resource'

function Topic({ match, topics }) {
  const id = match.params.topicId
  const topic = topics.find(topic => topic.id === id)
  
  return (
    <div >
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>
      <ul>
      {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.path}/:subId`} render={(props)=><Resource {...props} topics={topics} />} />
    </div>
  )
}

export default Topic
