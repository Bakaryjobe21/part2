import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const name=(e)=>{
    setNewName(e.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
    //const {secName} =newName;
    const noteObject = {

      name: newName,
      id:1
    }
   // const isPerson =persons.some(p=>{p.secName===name})?
    //noteObject.name===secName?  window.alert(`${noteObject.name} is not part of the phonebook`):
    setPersons(persons.concat(noteObject))
    setNewName('')
  }
  
 // ? notes
  //: notes.filter(note => note.important === true)


  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={name}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names)=>{
        return <div> {names.name}</div>
      })}
      
    </div>
          
    
    
  )
}

export default App



