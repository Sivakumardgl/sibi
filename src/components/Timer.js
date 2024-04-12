import React,{useState,useEffect} from 'react'

export default function Timer() {
    const[second,setsecond]=useState(0)
    const[button,setButton]=useState("start")
    const[running,isRunning]=useState(false)
        useEffect(()=>{
            if(running){
            const interval= setInterval(() => {
                setsecond((prev)=>prev+1);
              }, 1000)
              return ()=> clearInterval(interval)
            }
              
        })
    return (
      <div>
          <h1>CounterTime {second} Seconds</h1>
          <input type='number' onChange={(e)=>{setsecond(e.target.value)}}/>
          {isRunning?<button onClick={()=>{isRunning(true);setButton("stop")}}>{button}</button>:<button onClick={()=>{setsecond(0);setButton("start")}}>start</button>}
         
      </div>
    )
}
