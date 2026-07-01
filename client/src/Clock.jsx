import React, { useEffect, useState } from 'react'

function Clock() {
    const [time ,setTime] = useState(new  Date(). toLocaleTimeString());
    const[selctedColor, setSelectedColor] = useState("blue");
    const[bgcolor, setBgcolor] = useState("yellow");

     useEffect(()=>{
     setInterval(() => {
   
    
    
        setTime(new Date().toLocaleTimeString())
             
     }, 1000)

    },[])

  return (
    <div>
        <h1>{time}</h1>

      <div>
        <label>Text: </label>
        <select value={selectedColor} onChange={(event) => setSelectedColor(event.target.value)}>
          <option value="blue">BLUE</option>
          <option value="yellow">YELLOW</option>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
        </select>
      </div>
        
        <select  value={bgcolor} onChange={(event)=> setBgcolor(event.target.value)}>
            <label >Background :</label>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
        </select>
      
    </div>
  )
}

export default Clock
