import React, { useState } from 'react'

function Counter() {
    const [count, setVal] = useState(0);  // is usestate me hamesha current value define hogi bracket me 1 value he current value and 2 nd he function
    
    return (
    <div>

     <h1>{count}</h1>
 
   
        <button onClick={() => setVal(count + 1)}>Increase</button>
        <button onClick={() => setVal(count- 1)}>Decrease</button>

          {/* // isme ebutton ko click krne pr ye function chlega */}
      
    </div>
  )
}

export default Counter
