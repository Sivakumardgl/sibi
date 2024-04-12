import {useState} from 'react'

export default function Form1() {
    const[name,setName]=useState('siva')
    const changeName=(event)=>{
        setName(event.target.value)
    }
    const handleclick=()=>{
        console.log(name)
    }
    const Changejob=(e)=>{
        setjob(e.target.value)
    }
  
  return (
    <div>
        <h1>{name}</h1>
        <input type='text'value={name}onChange={changeName}/>
        <button onClick={handleclick}>submit</button>
   
   
        
    </div>
  )
}
