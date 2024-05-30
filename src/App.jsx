import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from './componentes/Header'
import { Home } from './vistas/Home'
import { Ejercicio1 } from './vistas/Ejercicio1'
import { Ejercicio2 } from './vistas/Ejercicio2'

function App() {


  return (
    <>
      <Router>
        <Header className="container-fluid"></Header>
        <div className="container mx-auto">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/ejercicio1" element={<Ejercicio1/>}></Route>
              <Route path="/ejercicio2" element={<Ejercicio2/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
