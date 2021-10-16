import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'


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

       <Filter persons={persons} newName={newName}/>

      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} name={name} number={number}/>
      
      <h3>Numbers</h3>

      <Persons persons={persons}/>
     
      
    </div>
          
    
    
  )
}

export default App



