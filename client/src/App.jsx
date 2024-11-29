import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
      </Routes>
      
    </BrowserRouter>
   
  )
}

export default App