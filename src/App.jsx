import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SobreMi from './components/sobremi/SobreMi'
import Proyectos from './components/proyectos/Proyectos'
import Hobies from './components/hobies/Hobies'
import Estudios from './components/estudios/Estudios'
import AsercaDeMi from './components/asercaDeMi/AsercaDeMi'



function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
       <Routes>
       <Route path='/' element={<SobreMi />} />
       <Route path='/proyectos' element={<Proyectos />} />
       <Route path='/hobies' element={<Hobies />} />
       <Route path='/estudios' element={<Estudios />} />
       <Route path='/asercaDeMi' element={<AsercaDeMi />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App