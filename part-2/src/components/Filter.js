import React from 'react'

const Filter = ({persons }) => {
  const name=  persons.filter((value)=>{
        return value.name
    })
    return (
        <div>
            {name.map((i)=>{
                return <div> <p> {i.name }</p> </div>
            })}
            
        </div>
    )
}

export default Filter
