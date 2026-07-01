import React from 'react'

function Loopwithobj() {
    const users =[
        {
            id : 101,
            name :"anita",
            age : 21,
            email :"anitaralot@gamil.com"

        },
          {
            id : 102,
            name :"tanu",
            age : 20,
            email :"tanuaralot@gamil.com"

        },
          {
            id : 103,
            name :"yogita",
            age : 10,
            email :"yogita@gamil.com"

        },
          {
            id : 104,
            name :"damii",
            age : 20,
            email :"damini@gamil.com"

        },
          {
            id : 105,
            name :"jya",
            age : 21,
            email :"jaya@gmail.com"

        },


    ];
  return (
    <div>
     <h1>Access data from object array</h1>
     <table border = "2">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>

        </thead>
       <tbody>
        {
            users.map((user) => (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>

                </tr>

            ))
        }
       </tbody>


     </table>

      
    </div>
  )
}

export default Loopwithobj
