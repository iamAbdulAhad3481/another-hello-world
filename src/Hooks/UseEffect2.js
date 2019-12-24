import React,{useState,useEffect} from 'react'

function UseEffect2() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);
    const[display,setDisplay]=useState(true)
    const logMousePosition=(e)=>{
        console.log('Mouse Move');
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        //component did mount and component did update
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
        //component will Unmount
        return(
          window.removeEventListener('mousemove',logMousePosition)
        )
    },[])
  return (
    <div>
      <button onClick={()=>setDisplay(false)}>Toogle display</button>
      {display && <p>X:{x} Y:{y}</p> }
    </div>
  )
}

export default UseEffect2
