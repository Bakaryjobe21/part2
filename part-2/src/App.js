import React, { useState } from 'react'



const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number:1829}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber]=useState(0)

  const name=(e)=>{
    setNewName(e.target.value)
  }

  const number=(e)=>{
    setNewNumber(e.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
    //const {secName} =newName;
    const noteObject = {

      name: newName,
      number:newNumber
    }
    
    //noteObject.name===secName?  window.alert(`${noteObject.name} is not part of the phonebook`):
    setPersons(persons.concat(noteObject))
    const isPerson =persons.some(p=>p.name===newName)

  if(isPerson){
    window.alert(`${newName} is already part of the phonebook`)


  }
   
    setNewName('')
    setNewNumber()
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
         <div>number: <input value={newNumber} onChange={number} /></div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((names)=>{
        return <div> <p key={names.name}>{names.name} {names.number}</p></div>
      })}
      
    </div>
          
    
    
  )
}

export default App



