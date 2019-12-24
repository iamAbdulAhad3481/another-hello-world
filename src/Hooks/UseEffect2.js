import React,{useState,useEffect} from 'react'

function UseEffect2() {
    const[x,setX]=useState(0);
    const[y,setY]=useState(0);

    const logMousePosition=(e)=>{
        console.log('Mouse Move');
        setX(e.clientX);
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
      X:{x} Y:{y}
    </div>
  )
}

export default UseEffect2
