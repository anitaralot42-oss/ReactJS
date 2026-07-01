


import React, { useState } from 'react'
import axios from 'axios'

function ExApp() {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    async function fetchWeather() {
        try {

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c75cd71545c1d733fb00e5e5a675b703`
            );

            console.log(response.data);

            setWeather(response.data);

        } catch (error) {
            console.log("Error fetching weather:", error);
        }
    }

   function handleClick() { 
        fetchWeather() ;
   } 

   function handle(event) { 
    setCity(event.target.value);
   }
   
  return (
    <div>
      <input type="text" id="" placeholder='Enter city name'  value={city} onChange={handle}/>
      <button onClick={handleClick}>Get Weather</button>
    </div>
  )
}

export default ExApp