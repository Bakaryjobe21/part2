import React from 'react'

const Filter = ({persons,newName,name,addPerson}) => {
  
    return (
        <div>
            
                <div>
                Search:<input value={newName}  onChange={name}/>
                </div>
                

               {persons.filter((value)=>{
        return value.name===newName
    })} 

            {persons.map((i)=>{
                return <div> <p> {i.name }</p> </div>
            })}
            
        </div>
    )
}

export default Filter
