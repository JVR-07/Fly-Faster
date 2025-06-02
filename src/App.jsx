import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

//Views
import Landing from './landing-view/Landing.jsx'
import Client from './client-view/pages/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
  )
}

export default App
