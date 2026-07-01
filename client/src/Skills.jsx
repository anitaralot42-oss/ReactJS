import React from 'react'

function Skills() {

     const [check, setCheck] = React.useState([]);
   

     function eventHandler(eventHandler)
     {
        if(eventHandler.target.checked){
              setCheck([...check,eventHandler.target.value]);

        }
    else{

          setCheck(check.filter((item) => item != eventHandler.target.value));
    }
     }

  return (

    <div>
        <h1>what documnet you have selected</h1>

       
        <input type="checkbox"  id="C" value="C" onChange={(eventHandler)} />
         <label htmlFor="C">C language</label><br />
       
        <input type="checkbox"  id="C++" value ="C++"onChange={(eventHandler)}  />
         <label htmlFor="C++">C++ langusage</label> <br />
        
        <input type="checkbox"  id="JAVASCRIPT"  value ="JAVASCRIPT"onChange={(eventHandler)} />
         <label htmlFor="JAVASCRIPT">javascript language</label><br />

        <input type="checkbox" id="JAVA"  value ="JAVA"onChange={(eventHandler)}  />
         <label htmlFor="JAVA">java language</label><br />
         {check}

      
    </div>
  )
}

export default Skills
