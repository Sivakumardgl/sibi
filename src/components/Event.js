import React,{useState} from 'react'
export default function Event() {
    const[names, setName]=useState('adam')
    function changeName(){
        setName('john')
    }
    return(
        <div>
            <h1>welcome {names}</h1>
            <button onClick={changeName}>change</button>
        </div>
    )
}
