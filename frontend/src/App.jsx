import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Register from './pages/Register'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/h" element={<Home/>}>
    <Route path="ch" element={<Register/>}/>
    </Route>

   </Routes>
   </BrowserRouter>
  )
}

export default App