import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
      <BrowserRouter>
         <Routes>
      <Route path='/' element={ <Navbar />}></Route>

       
      </Routes>
      
      </BrowserRouter>
   
   
  )
}

export default App
