import React from 'react'

export default function Tabletask(props) {
  return (
    <tbody>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.job}</td>
        </tr>
    </tbody>
  )
}
