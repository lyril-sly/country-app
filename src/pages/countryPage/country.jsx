import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbarComponent/navbar'
import axios from 'axios'

export const City = () => {
  const [country, setCountry] = useState(null)
  const params = useParams()
  console.log('params', params)
  const url = `https://restcountries.com/v3.1/name/${params.cityName}`

  useEffect(() => {

    async function displayOneCountry(){
     try{
         // this is how you display all country using the url
        const countries = await axios.get(url)
        const countriesBox = countries.data
        console.log('pa', countriesBox)
        setCountry(countriesBox[0])
       
     } catch (error){
    
     }
      
    }
  
    displayOneCountry()
  }, [params.cityName])

  if(!country){
    return <div>Loading.....</div>
  }
  return (
    <>
    <Navbar/>
    <h1>Welcome to my Country page</h1>
    <img src={country.flags.png} alt="" />
   <p>the subregion: {country.subregion}</p>
    <p>This is the timezone: {country.timezones}</p>
    <Link>map: {country.maps.googleMaps}</Link>
    <p>population: {country.population}</p>
    </>
  )
}
