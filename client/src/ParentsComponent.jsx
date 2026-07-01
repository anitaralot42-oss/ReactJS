import React from 'react'
import ChildComponent from './childComponent';


function ParentsComponent() {
 
  const dataObject ={

    product: "minimalist",
    price : 10000,
    image: hero

  }

  return (
    <div>
     <ChildComponent  data = {dataObject}/>

      
    </div>
  )
}

export default ParentsComponent
