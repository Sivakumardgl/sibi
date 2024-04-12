import React, { useState } from 'react'
import Tabletask from './Tabletask'
export default function task5() {
    const[list,setlist]=useState([])
    const[id,setId]=useState([])
    const[name,setName]=useState('')
    const[job,setJob]=useState('')
    const changeId=(e)=>{
        setId(e.target.value)
    }
    const changeName=(e)=>{
        setName(e.target.value)

    }
    const changeJob=(e)=>{
        setJob(e.target.value)
    }
    const handle2=(e)=>{
        e.preventDefault()
        setlist([
            {
                id:id,
                name:name,
                job:job},...list])
            }
        
    }
  return (
    <div>
        <h1>Add Employee</h1>
        <form onsubmit={handle2}>
        <label>ID:</label>
        <input type='text' value={id}onChange={changeId}/><br></br>
        <label>NAME:</label>
        <input type='text' value={name} onchange={changeName}/><br></br>
        <label>JOB:</label>
        <select onChange={changeJob}/>
            <option value='developer'>DEVELOPER</option>
            <option value='supporter'>SUPPORTER</option>
            <button type='submit'>Add Employee</button>    
</form>
<table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    {list.map(x=><Tabletask key={x.id} name={x.name} job={x.job}/>)}
</table>
</div>


  )
  }
