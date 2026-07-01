import React, { useState } from 'react'

function Radio() {
    const[gender,setGender] = useState("Male");
    const[city,setCity] = useState("");

  return (
    <div>
        <form>
           <h2>select your gender</h2>
            <label htmlFor="Male">Male</label>
            <input type="radio" name="Gender" id="" checked = {gender == "Male"} value ={"Male"} onChange={(event) => setGender(event.target.value)}/><br></br>

            <label htmlFor="Female">Female</label>
             <input type="radio" name="Gender" id="Female"   checked = {gender == "Female"} value ={"Female"} onChange={(event) => setGender(event.target.value)} />
        </form>
      <h2>you have selected {gender}</h2>

      <h3>select your city</h3>

      <select onChange={(event)=>  setCity(event.target.value)}>

        <option value="Udaipur">Udaipur</option>
        <option value="Jodhpur">Jodhpur</option>    
        <option value="Jaipur">Jaipur</option>
        <option value="Jaisalmer">jaisalamer</option>
        

      </select>
      {city && (
      <h2>you have selected : {city}</h2>
      )}

     
    </div>
  )
}

export default Radio
