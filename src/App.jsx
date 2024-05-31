import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from './componentes/Header'
import { Panel } from './vistas/Panel'
import { Login } from './vistas/Login'
import { Registro } from './vistas/Registro'

function App() {


  return (
    <>
      <Router>
        <Header className="container-fluid"></Header>
        <div className="container mx-auto">
          <Routes>
              <Route path="/" element={<Panel/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/registro" element={<Registro/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
