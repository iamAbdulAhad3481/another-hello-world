import React, { useState } from 'react'

function HooksCounterArray() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => <p key={item.id}>{item.value}</p>)}
      </ul>
    </div>
  )
}

export default HooksCounterArray
