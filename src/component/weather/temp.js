/* https://api.openweathermap.org/data/2.5/weather?q=pune&appid=32f59d32f5cf9a3620f9b6831ef9c79c*/
import React, {useState,useEffect} from 'react'
import './style.css'
import Weathercard from './weathercard';

const Temp = () => {

   const [searchValue, setSearchValue]= useState("Pune");
   const[tempinfo, setTempinfo]= useState({});
   const getWeatherInfo= async () => {
    try {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=32f59d32f5cf9a3620f9b6831ef9c79c`; //Here we have written units=metric inorder to convert the fahrenheit units to celsius                                                      
        const res= await fetch(url); //This fetch function is used to request data from the server using URL. It returns the promise
        const data= await res.json(); // This is used to convert the data that had been given by fetch response to object
        // console.log(typeof(res));
        console.log(data);
        // console.log(typeof(data))
        const {temp,humidity,pressure}= data.main; //This is destructuring of the object data which is in the form of nested objects. Temp is the one of the state of object inside an object
        const {main: weathermood}= data.weather[0]; // Here it is destructuring of the object and we have changed the name of the variable from main to weathermood
        const {name}= data; // Just destructuring the object which is returned from the json response
        const {speed}= data.wind; // Just destructuring the object which is returned from the json response
        const {country, sunset}= data.sys;

        const mynewweatherinfo= {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        };
        
        setTempinfo(mynewweatherinfo);

        console.log(temp);
    }catch(error){
        console.log(error);
    }
   };

   {/* Here we also use useEffect hooks inorder to get immediate change in the website when we refresh the page  */}
   useEffect (() => {
    getWeatherInfo();
   },[]);

//    here while using the useEffect syntax we should not use the const key word because we are not defining any variable for useEffect



  return (
    <>
    <div className='wrap'>  
    {/* This is the search text and search button code */}
    <div className='search'>

      <input type='search'
        placeholder='search...'
        autoFocus
        id='search' value={searchValue} onChange= {(event)=> setSearchValue(event.target.value)}
        // This setSearchvalue is storing what is user giving inside the search box
        className='searchterm'/>
        {/* Here we need to store the input city which is giving by the user so we will be giving value attribute and onChange attribute inside the input tag */}

    </div>
    <button className='searchButton' type='button' onClick={getWeatherInfo}>
    {/* Here inside the button tag we will be giving the onClick event so that when we click on search button we will be getting weather info  */}
    search
    </button>
    </div>

    {/* Now we will be writing the code for getting the data   */}
    {/* Temp Card */}
    <Weathercard   tempinfo= {tempinfo} />
    {/* Here we are using props to pass the data from temp.js to weathercard.js */}

    </>
  )
}

export default Temp