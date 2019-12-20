import React from 'react'

function Resource({ match, topics }) {
    const topic = topics.find(({ id }) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId)
    return (
        <div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
            <a href={topic.url}>More info.</a>
        </div>
    )
}

export default Resource
