
//import PersonForm from './components/PersonForm'
//import Persons from './components/Persons'
import Filter from './components/Filter'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {

  const [persons, setPersons] = useState([])
  //const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  // ...

 // const [ persons, setPersons ] = useState([
 //   { name: 'Arto Hellas',number:1829}
 // ]) 
  const [ newName, setNewName ] = useState('')
 // const[search,setSearch]=useState('')
  const [newNumber,setNewNumber]=useState()

  const name=(e)=>{
    setNewName(e.target.value)
  }
 // const name2=(e)=>{
  //  setSearch(e.target.value)
  //}

  const number=(e)=>{
    setNewNumber(e.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
    //const {secName} =newName;
    const noteObject = {

      name: newName,
      number:newNumber,
      
    }

    axios
    .post('http://localhost:3001/persons', noteObject)
    .then(response => {
      setPersons(persons.concat(response.data))
    })
    
    //noteObject.name===secName?  window.alert(`${noteObject.name} is not part of the phonebook`):
    
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



       
      <h3>Add a new</h3>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={name}/>
        </div>
         <div>number: <input value={newNumber} onChange={number} /></div>

        <div>
          <button type="submit">add</button>
        </div>
        </form>
      
      <h3>Numbers</h3>
      {persons.map((names,index)=>{
        return <div> <p key={index}>{names.name} {names.number}</p></div>
      })}

    
     
      
    </div>
          
    
    
  )
}





export default App


//<PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} name={name} number={number}/>
// <Persons persons={persons}/>

//<Filter persons={persons} newName={newName} name2={name2} addPerson={addPerson}/>
