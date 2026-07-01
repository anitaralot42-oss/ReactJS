import React from 'react'

function Studnetform() {
     const [Name, setName] = React.useState('')
     const [Age, setAge] = React.useState('')
     const [Email, setEmail] = React.useState('')
    
     function Print(){
        document.write(`name : ${Name} <br>  age ${Age} <br> email ${Email} `);
     }
     
  return (
    <div>
      <h1>Student Form</h1>
      <body>
        <table border={} >

      <input type="text" name="" id="" placeholder='enter user name'onChange={(event) => setName(event.target.value)} />
      <input type="number" name="" id="" placeholder='age'onChange={(event) => setAge(event.target.value)} />
      <input type="text" name="" id="" placeholder='email'onChange={(event) => setEmail(event.target.value)} />
      <button onClick={(event) => Print()}>Submit</button>
      </table>
       </body>
    </div>
  )
}

export default Studnetform
