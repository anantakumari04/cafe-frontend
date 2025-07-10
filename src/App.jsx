import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import './App.css'
import Temp from './components/Temp'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  
  
    return (
      <>  
      {/* <Home name="John" age ={21} />
      <Temp flag={true} /> */}
        {/* <Temp flag /> */}
        <h1>Cafe Frontend</h1>
        <Register />
        <Login />
        <h3>This is footer</h3>
        
      </>
   
    )
      
  
}

export default App
