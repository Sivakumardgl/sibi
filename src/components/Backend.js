import {useEffect, useState } from 'react'
import './Cryd.css'

import axios from 'axios'


export default function Backend() {
  // const[list,setlist]=useState([])
  // const[id,setid]=useState(0)
  // const[name,setname]=useState('')
  // const[marks,setmarks]=useState(0)

  useEffect(()=>{axios.get('http://localhost:3000/')
    .then(res=>console.log(res.data))
    .catch(err=>console.log (err))
  },[])

  // const AddData=()=>{
  //   axios.post('http://localhost:3001/students')
    // {id:id,name:name,marks:marks})
    // .then(res=>console.log(res))
    // .catch(err=>console.log (err))
  
  // },[])
    
  return (
    <div>
      <h1>Admin User</h1>
      <form>
        <label>ID:</label><br></br><br></br>
        <input type='number'/>
        <label>NAME:</label><br></br><br></br>
        <input type='text'/>
        <label>MARKS:</label><br></br><br></br>
        <input type='number'/><br></br>
        <button type='submit'>Add Data</button><br></br><br></br><br></br>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MARKS</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}


