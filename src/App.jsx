//Dependiences
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

//styles
import './App.css'

//Views
import Landing from './landing-view/Landing.jsx'
import Client from './client-view/pages/Home.jsx'
import Admin from './admin-view/pages/Dashboard.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/client/*' element={<Client/>}/>
      <Route path='/admin/*' element={<Admin/>}/>
    </Routes>
  )
}

export default App
