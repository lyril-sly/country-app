import React from 'react'
import Navbar from '../../components/navbarComponent/navbar'

export const Countries = () => {

    const url = 'https://restcountries.com/v3.1/all'
    console.log(url)

    // function displayCountries(){
    //     let allCountry = fetch(url).then((respond) =>  {
    //      console.log('country',respond.json())   
    //     })
   
    // } 
    // displayCountries()

    async function displayAllCountry(){
        const country = await fetch(url)
        console.log('country',country.json())
    }
    displayAllCountry()
    
    return (
    <>
    <h1>This is the countries page</h1>
    <Navbar/>

   
    </>
  )
}
