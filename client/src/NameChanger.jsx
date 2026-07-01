import React, { useState } from 'react'

function NameChanger() {
    const [name , setVal] = useState("Anita");
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={() => setVal("dharmu")}>click with change name</button>
      
    </div>
  )
}

export default NameChanger
