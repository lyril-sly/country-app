import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import Navbar from '../../components/navbarComponent/navbar'



export const Countries = () => {
  // const[name, setName] = useState([])
    const url = 'https://restcountries.com/v3.1/all'
    console.log(url)

    // function displayCountries(){
      // this another way of displaying all country using url
    //     let allCountry = fetch(url).then((respond) =>  {
    //      console.log('country',respond.json())   
    //     })
   
    // } 
    // displayCountries()

 useEffect(Countries)
    let countriesBox
     async function displayAllCountry(){
       // this is how you display all country using the url
         const countries = await axios.get(url)
         const countriesBox = countries.data
         const sliceData =countriesBox.slice(0,5)
         console.log('yeah',sliceData)
         let result = sliceData.map((country) => {
          console.log(country.name.official)
         })
         
        
        //  const response = countries.json()
        //  countriesBox.push(response)
         return countriesBox
     }
     displayAllCountry()

    async function displayFiveCountry (){
//  let fiveItems = countriesBox.slice(0,4).map(data)=>{}
        // console.log('fiveItems',fiveItems)
    }

    displayFiveCountry()

    return (
    <>
    <h1>This is the countries page</h1>
    <Navbar/>
    <p>{}</p>

   
    </>
  )
}
