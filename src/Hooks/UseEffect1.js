import React, { useState, useEffect } from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating Document title')
        document.title = `You Clicked ${count}`
    },[count])
    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default UseEffect1
