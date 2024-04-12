// import React, { useState } from 'react'

// export default function Formhandling() {
//     const[name,setName]=useState('sivakumar')
//     const[address,setaddress]=useState('')
//     const[job,setjob]=useState('')
//     const changename=(e)=>{
//         setName(e.target.value)
//     }
//     const changeaddress=(e)=>{
//         setaddr(e.target.value)
//     }
//     const changejob=(e)=>{
//       setjob(e.target.value)
//     }
//     const handlesubmit=(e)=>{
//       e.preventDefault()
//       console.log(name,job,address)
//     }
    
//   return (
//     <div>
//         <h1>{name}</h1>
//         <form onSubmit={handlesubmit}>
//           <label>Name:</label>
//           <input type='text'value={name}onChange={changename}/><br></br>
//           <label>Address</label>
//         </form>
//         </div>
        
//   )
// }
// import React, { useState } from 'react'

// export default function Formhandling() {
//   const[count,setcount]=useState(0)
//   function changecount(){
//     setcount(count+1)
//   }
//   function changecount1(){
//     setcount(count-1)
//   }
//   return (
//     <div>
//     <h1>count{count}
//       </h1>
//     <button onClick={changecount}>Increment</button>
//     <button onClick={changecount1}>Decrement</button>
//     </div>
//   )
// }

// TOGGLE
// import React,{useState} from 'react'

// export default function Formhandling() {
//   const[istoggle,settoggle]=useState(true)
//   function toggle(){
//     setistoggle('is toggled')
//   }
//   return (
//     <div>Formhandling</div>
//   )
// }

// import React, { useEffect, useState } from 'react'

// export default function Formhandling() {
//   const[count,setcount]=useState=(0)
//   useEffect(()=>{
//     setTimeout(()=>{
//       setcount(count+1)

//     },100
//   })
//   return (
//     <div>
//       <h1>
//         {count}
//       </h1>
//     </div>
//   )
// }




