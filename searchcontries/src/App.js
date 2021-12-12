import React,{useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const  [searchFilter, setSearchFilter]=useState('')
  const[countries, setContries]=useState([])

  useEffect(()=>{
    
    axios.get('https://restcountries.com/v3.1/all')
    .then((response)=>{
      setContries(response.data)
    })
  },[])
  console.log('render')
  const handleSearch=(e)=>{
    setSearchFilter(e.target.value)
    
  }

  const searchContries=countries.filter((fil)=>{
    if(searchFilter==('')){
      return fil
    }
    else if(fil.name.common.toLowerCase().includes(searchFilter.toLocaleLowerCase())){
      return fil
    }
   })

  return (
    <div>
      find countries <input value={searchFilter}  onChange={handleSearch} />
      <ShowCountries  searchContries={searchContries}/>
      
    </div>
  )
}

const ShowCountries=({searchContries})=>{
  if(searchContries.length === 1){
    const country=searchContries[0]
    return(
      <div>
     <h1>
       {country.name.common}

     </h1>

     <div>capital {country.capital}</div>
     <div>population {country.population}</div>

     <h1>
       languages
     </h1>
     
     
     <img src={country.flag} width ='50%'/>
      </div>
    )
  }
  if(searchContries.length >  10) return <div>Too many matches, specify another filter</div>
  return searchContries .map((con)=>{
    return <div>{con.name.common}</div>
  })

}

export default App
