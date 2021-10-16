import React from 'react'

const Persons = ({persons}) => {
    return (
        <div>
             {persons.map((names)=>{
        return <div> <p key={names.name}>{names.name} {names.number}</p></div>
      })}
            
        </div>
    )
}

export default Persons
