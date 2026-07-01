import React from 'react'

function Maploop() {
      let friends =["tanu ", "yogita" , "damini"];

  return (
    <div>
       {friends.map((element,index) =>
       <p key = {index } >{ element }</p>

 )}

      
    </div>
  );
}

export default Maploop
