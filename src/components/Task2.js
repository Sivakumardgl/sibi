import React, { useState } from 'react'

export default function Task2() {
    const[value,setValue]=useState("ON")
  
  return (
    <div>
        {value}
        <br></br>
        {value=="ON"?<button onClick={()=>setValue("OFF")}>Toggle</button>:<button onClick={()=>setValue("ON")}>Toggle</button>}
    </div>
  )
}
