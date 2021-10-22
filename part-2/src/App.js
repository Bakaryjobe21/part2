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
  const [succesMessage, setSuccessMessage] = useState(null)



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
      
      
    }

    personService
    .create(personObject)
    .then(response => {
      setPersons(persons.concat(response.data))

      setSuccessMessage( `Added '${personObject.name}'`)
  })
  setTimeout(() => {
    setSuccessMessage(null)
  }, 5000)
   
    
    const isPerson =persons.some(p=>p.name===newName)

  if(isPerson){
    window.alert(`${newName} is already part of the phonebook`)


  }

  
    setNewName('')
    setNewNumber()  
  }

  const remove =(id)=>{
    const url = `http://localhost:3001/persons/${id}`
    const personObject = {

      name: newName,
      number:newNumber,
      
      
    }
  
    axios.delete(url).then(response => {
      setPersons(persons.filter(per => per.id !== id ))
      
    } )
    if(setPersons){
      
      window.alert(`delete ${persons.map((name)=>{
        return name.name
      })}  ?`)
  
  }
  }
    
   
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={succesMessage}  />
  
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
        return <div> <p key={index}> <Person person={names} remove={() => remove(names.id) } />  </p></div>
       
      })}

    
     
      
    </div>
          
    
    
  )
}

const Person = ({ person,  remove }) => {
  const bottonStyle = {
    color: 'white',
    backgroundColor:'red'

    
  }

  

  return (
    <p>
      {person.name}  {person.number}    <button onClick={remove} style={bottonStyle}>Delete</button>


     
      
    </p>
  )
}

const Notification = ({ message, clss }) => {
  if(message==null){
    return null
  }
  
    return (
      <div style={{color:'green',fontSize:30}}>
        {message}
      </div>
    )
  }
  


export default App



