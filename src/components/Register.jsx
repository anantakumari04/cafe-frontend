import React, { useState } from 'react'
import axios from 'axios';  //to call backend api


export default function Register() {

    const[user, setUser] = useState({}) //curly braces means user is an object

    const [error, setError] = useState();

    const API_URL = import.meta.env.VITE_API_URL //env se access krne k loye frontend me ye krte h


    
    const handleSubmit = async () =>{

      try{
        const url = `${API_URL}/api/users/register`  // to call end point for register which we have used in backend
        //waha se register function me jaa k waha ka code execute ho rha

        // const url = "https://cafe-backend-five.vercel.app/api/users/register" //live url of backend

        const result = await axios.post(url,user)  //axios return promise //user object me jo bhi h wo post ho jaega db me

        setError("Data saved successfully")
      }
      catch(err){
        console.log(err);
        setError("Something went wrong");

      }

        

    }

  return (
    <div>
      <h2>Registration Form</h2>
      <p>
        {/* user array me nya ek value create hoga firstName se jiska value whi hoga jo bhi hmlog type krenge user={..user, firstName: "an", lastName: "sddf", ....}*/}

        <input type="text" placeholder='Fist Name' onChange={(e)=>setUser({...user,firstName: e.target.value})}></input> 
      </p>
      <p>
        <input type="text" placeholder='Last Name' onChange={(e)=>setUser({...user,lastName: e.target.value})}></input>
      </p>
      <p>
        <input type="text" placeholder='Email Address'onChange={(e)=>setUser({...user, email: e.target.value})}></input>
      </p>
      <p>
        <input type="password" placeholder='New Password' onChange={(e)=>setUser({...user, password: e.target.value})}></input>
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
       {error && <p>{error}</p>}
    
    </div>
  )
}
