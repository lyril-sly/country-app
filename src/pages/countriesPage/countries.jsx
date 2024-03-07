import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import './countries.css'
import Navbar from '../../components/navbarComponent/navbar'
import { Link } from 'react-router-dom'



export const Countries = () => {
   const[country, setCountry] = useState([])
    const url = 'https://restcountries.com/v3.1/all'
    console.log(url)

    

useEffect(() => {

  async function displayAllCountry(){
   try{
       // this is how you display all country using the url
      const countries = await axios.get(url)
      const countriesBox = countries.data
      setCountry(countriesBox)
     
   } catch (error){
  
   }
    
  }

  displayAllCountry()
}, [])
    
    
     console.log(country)
     

     // function displayCountries(){
      // this another way of displaying all country using url
    //     let allCountry = fetch(url).then((respond) =>  {
    //      console.log('country',respond.json())   
    //     })
   
    // } 
    // displayCountries()
     

    async function displayFiveCountry (){
//  let fiveItems = countriesBox.slice(0,4).map(data)=>{}
        // console.log('fiveItems',fiveItems)
    }

    displayFiveCountry()

    return (
    <>
    
    <Navbar/>
    <h1>This is the countries page</h1>
    <div className='container'>
      {country.slice(6, 16).map((item) =>(
       <div className='container-box'>
        <li>
        <img className='img-img' src={item.flags.png}/>
          <h1>{item.name.common}</h1>
          <p>{item.fifa}</p>
        </li>
        <Link to={`/city/${item.name.common}`} >
        <button className='btn'>See More</button>
        </Link>
       </div>
      ))}
    </div>

   
    </>
  )
}
