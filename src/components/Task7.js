// import React, { useEffect, useState } from 'react'

// export default function Task7() {
//     const[second,setsecond]=useState(0)
//     const[running,setrunning]=useState(false)
//     useEffect(()=>{
//         if(running){
//             interval=setInterval(()=>{
//                 setsecond(prev=>prev+1)
//             },1000)
//         }
//         return()=>{
//             clearInterval(interval)
//         }
//     },[running])



//   return (
//     <div>
//         <h1>CounterTimer{second}second{running ?}</h1>
//         <input type='number'/>
//         <button onClick={()=>{setrunning (true)}}>start</button>
//         <button>stop</button>
//         <button>Reset</button>
//         {/* <input type='number'/> */}
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react'

// export default function Task7() {
//     const[count,setcount]=useState(0)
//     const[isrunning,setrunning]=useState(false)
//     useEffect(()=>{
//         if(isrunning){
//             interval=setInterval(()=>{
//                 setcount(pre=>pre+1)
//             },1000)
//         }
//         return()=>{
//             clearInterval(interval)
//         }
//     },[isrunning])
//   return (
//     <div>
//         Time:{count}second
//         {isrunning?<button onClick={()=>setisrunning true}}></button>
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function Task7() {
    const[second,setsecond]=useState(0)
  return (
    <div>
        <h1>CounterTime{second}Seconds</h1>
        <input type='number' value={second}onChange={(e)=>{setsecond(e.target.value)}}/>
        <button>start</button>
        <button>Reset</button>
    </div>
  )
}

