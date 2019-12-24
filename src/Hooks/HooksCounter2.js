import React, { useState } from 'react'

function HooksCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={IncrementFive}>IncrementFive</button>
    </div>
  )
}

export default HooksCounter2
