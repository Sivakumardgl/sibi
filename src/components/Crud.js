import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Crud() {
    const[id,setId]=useState("")
    const[value,setValue]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3001/students/${id}`)
        .then(res=>{setValue(res.data)})
        .catch(err=>{console.log(err)})
    })
    return (
        <div>
            <input type='text'onChange={(ad)=>setId(ad.target.value)}/>
           <h1>{value.name} {value.marks}</h1> 
            {/* <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>MARKS</th>
                        </tr>
                </thead>
                <tbody>
                {data.map((x)=>(
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.marks}</td>
                    </tr>
                ))}
                        
                </tbody>
            </table>
             */}
        </div>
      )
    }
  

