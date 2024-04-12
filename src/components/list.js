import React from 'react'

export default function list() {
    let list=[{
        id:'11'
        name:'sivakumar'
        marks:99
    },
{
    id:'12'
    name:'sibi'
    marks:98
}]

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID:</th>
                    <th>Name:</th>
                    <th>Marks:</th>
                    </tr>
                    </thead>
                    {list.map(x=> Key={x.id}id={X.id})}
                    <TableData id={x.id} name={x.name}
                    marks={x.marks}/>}

                    </table>
                    </div>
  )
}
