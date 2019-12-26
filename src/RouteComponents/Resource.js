import React from 'react'

function Resource({ match, topics }) {
  console.log(match)

  let topic = topics.find((topic) => topic.id === match.params.topicId)
   topic=topic.resources.find(({ id }) => id === match.params.subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}

export default Resource
