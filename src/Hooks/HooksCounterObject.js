import React,{useState} from 'react'

function HooksCounterObject() {
    const[name,setName]=useState({firstName:'',lastName:''});

  return (
    <div>
        <input value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} />
        <input value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
        <hr/>
        {name.firstName} {name.lastName}
    
    </div>
  )
}

export default HooksCounterObject
