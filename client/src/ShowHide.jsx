import React, { useState } from 'react'

function ShowHide() {
    const[show ,setShow] = useState(true);
  return (
    <div>
     {show && <h1 >hello anita</h1>}
        <button onClick={() => setShow(! show)}>Toggle</button>
        {/* <button onClick={() => setVal(" ")}>HIDE</button> */}
      
    </div>
  )
}

export default ShowHide
