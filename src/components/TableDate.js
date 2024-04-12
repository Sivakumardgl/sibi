import React from 'react'

export default function TableDate(props) {
   

  return (
    <tbody>
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.marks}</td>
    </tr>
    </tbody>
  )
}
