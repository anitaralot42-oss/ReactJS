import React from 'react'

function ChildComponent({data}) {
  return (
    <div>
   
    <p>product :{data.product}</p>
     <p>price :{data.price}</p>
    <img src= {data.image} alt="" />
      
    </div>
  )
}

export default ChildComponent
