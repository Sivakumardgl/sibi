import axios from 'axios'
import './Cryd.css'
import React, { useEffect, useState } from 'react'
export default function CreateRead() {
    const[id,setId]=useState("")
    const[name,setName]=useState("")
    const[marks,setMarks]=useState(0)
    const[store,setStore]=useState([])
    const[storage,setStorage]=useState([])

    useEffect(()=>{axios.get("http://localhost:3001/students")
    .then(x=>{setStorage(x.data)})
    .catch(y=>{console.log("Data error")})
})
      
    const deleteClick=(idd)=>{
        axios.delete(()=>{axios.get(`http://localhost:3001/students/${idd}`)})
        .then(x=>alert("deleted successfully"))
        
        .catch(y=>alert("error occured bro"))
    }

    const saveData=()=>{
            axios.post("http://localhost:3001/students",{id:id,name:name,marks:marks})
            .then(a=>{setStore(a);alert("Data stored")})
            .catch(b=>alert("Data not added"))
    }
  return (
    <div className='regform'>
      <h2><center>ADMIN USER</center></h2>
      <center>
        <form onSubmit={saveData}>
            
        <label>Id</label>
          <input type='text' placeholder='Enter Your Id' onChange={(e)=>{setId(e.target.value)}}/><br></br>
            <label>Name</label>
            <input type='text'placeholder='Your Name'  onChange={(e)=>{setName(e.target.value)}}/><br></br>
            <label>Mark</label>
            <input type='number'placeholder='Your Mark' onChange={(e)=>{setMarks(e.target.value)}}/><br></br>
            <button type='submit'>Submit</button><br></br>
            
           
        </form>
        </center>

        <center>
        <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>MARKS</th>
                            <th>ACTION</th>
                        </tr>
                </thead>
                <tbody>
                {storage.map((x)=>(
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.marks}</td>
                    <td><button onClick={()=>deleteClick(x.id)}>Delete</button></td>
                    </tr>
                ))}
                        
                </tbody>
            </table>
            </center>
    </div>
  )
}
