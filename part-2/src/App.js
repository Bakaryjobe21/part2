import personService from './services/person'
import './index.css'

//import PersonForm from './components/PersonForm'
//import Persons from './components/Persons'
//import Filter from './components/Filter'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { buildQueries } from '@testing-library/dom'


const App = () => {

  const [persons, setPersons] = useState([])
 


  useEffect(() => {
    console.log('effect')
    personService
    .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const [ newName, setNewName ] = useState('')
 // const[search,setSearch]=useState('')
  const [newNumber,setNewNumber]=useState()

  const name=(e)=>{
    setNewName(e.target.value)
  }
 

  const number=(e)=>{
    setNewNumber(e.target.value)
  }

  const  addPerson= (event) => {
    event.preventDefault()
  
    const personObject = {

      name: newName,
      number:newNumber,
      important: Math.random() > 0.5
      
    }

    personService
    .create(personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
     
    })
   
    
    const isPerson =persons.some(p=>p.name===newName)

  if(isPerson){
    window.alert(`${newName} is already part of the phonebook`)


  }

  
    setNewName('')
    setNewNumber()
  }
  
  
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
          <button type="submit" style={{ backgroundColor:'blue'}}>Add</button>
        </div>
        </form>
      
      <h3>Numbers</h3>
      {persons.map((names,index)=>{
        return <div> <p key={index}> {names.name} {names.number} </p></div>
       
      })}

    
     
      
    </div>
          
    
    
  )
}




export default App



