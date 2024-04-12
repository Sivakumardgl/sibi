// import React, { useState } from 'react'

// export default function Intro() {
//     const[name,setName]=useState('Siva kumar')
//     function changename(){
//         setName('Sibi kumar')
//     }
//   return (
//     <div>
//         <h1>Welcome  {name}</h1>
//         <button onClick={changename}>Change</button>
//     </div>
//   )
// import React, { useState } from 'react'

// export default function Intro() {
//     const[count,setcount]=useState(0)
//     function changecount(){
//         setcount(count+1)

//     }
//     function changecount1(){
//         setcount(count-1)

//     }

//   return (
//     <div>
//         <h1>Count:{count}</h1>
//         <button onClick={changecount}>Increment</button><br></br>
//         <button onClick={changecount1}>Decrement</button>
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function Intro() {
//     const[count,setcount]=useState(0)
//     function changecount(){
//         setcount(count+1)
//     }
//     function changecount1(){
//         setcount(count-1)
//     }
//   return (
//     <div>
//         <h1>count{count}</h1>
//         <button onClick={changecount}>Increment</button>
//         <button onClick={changecount1}>Decrement</button>
//     </div>
//   )
// }
// import React, { useState } from 'react'

// export default function Intro() {
//     const[siva,setsiva]=useState(true)
//     if(siva){
//         return(<h1>Welcome Siva</h1>)
//     }
// else{
//   return (
//     <div>
//         <h1>Welcome user</h1>
//     </div>
//   )
// }
//}

//true(or)false
//  import React, { useState } from 'react'

// export default function Intro() {
//     const[sibi,setsibi]=useState(false)
//     if(sibi){
//         return(
//             <h1>Welcome sibi</h1>
//         )
//     }
//     else{
//   return (
//     <div>
//         <h1>Not Welcome sibi</h1>
//     </div>
//   )
// }
// }


// MULTIPLE ARRAY

// import React from 'react'

// export default function Intro() {
//     let a=['sibi','vijay','sasi','vasanth']
//   return (
//     <div>
//         {a.map(x=><h1>{x}</h1>)}
//     </div>
//   )
// }

import React from 'react'
import TableDate from './TableDate'

export default function Intro() {
    let list=[{
        id:'11',
        name:'siva',
        marks:100
    },
    {
        id:'22',
        name:'sasi',
        marks:200
    },
    {
        id:'33',
        name:'vasanth',
        marks:300
    }

    ]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>ID:</td>
                    <td>NAME:</td>
                    <td>MARKS:</td>
                </tr>
            </thead>
            {/* {list.map(z=> 
            <TableDate id={z.id} name={z.name} marks={z.marks}/>)} */}
            {list.map(x=>(<tbody>
                <tr>
                <td>{x.id}</td> 
                <td>{x.name}</td> 
                <td>{x.marks}</td>
                </tr>
                </tbody>)
                )
            }

          
        </table>
    </div>
  )
}
