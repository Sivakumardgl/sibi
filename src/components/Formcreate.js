// import {useState} from 'react';
// import './Formcreat.css';

// export default function Formcreate() {
//  function myform(){
//     const[name,setName]=useState('');
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         alert(`The name you entered was:${name}`);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>Ener your name:
//                 <input type="text" value={name}onChange={(e)=>setName(e.target.value)}/> 
//             </label>
//             <input type='submit'/>
//         </form>
//     )

//     }
//     const root=ReactDom.createRoot(document.getElementById('root'));
//     root.render(<MyForm/>);