import React,{useState}from 'react'

function Count() {
    const[count,setcount]=useState(0)
    const Inc=()=>{
        // setcount(prev=>prev+1)}
        
        if(count<100){
            setcount(count+1)
        }
    }
        const Dec=()=>{
            if(count>0){
                setcount(count-1)
            }
        }
    


  return (
    <div>
        count ={count}
        <button onClick={Inc}>Increment</button>
         <button onClick={Dec}>Decrement</button> 
    </div>
  )
}

export default Count


