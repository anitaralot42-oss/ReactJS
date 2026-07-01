import React from 'react'

function UseState() {
  const [val, setVal] = React.useState('')
  return (
    <div>
      <h1>dynamic input field</h1>
      <input type="text" onChange={(event) => setVal(event.target.value)} />
      <h1>{val}</h1>
      <button onClick={(event) => setVal(" ")}>clear</button>
    </div>
  )
}

export default UseState