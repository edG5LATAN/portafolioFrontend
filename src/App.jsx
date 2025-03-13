import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SobreMi from './components/sobremi/SobreMi'
import Proyectos from './components/proyectos/Proyectos'
import Hobies from './components/hobies/Hobies'
import Estudios from './components/estudios/Estudios'
import AsercaDeMi from './components/asercaDeMi/AsercaDeMi'
import ReactGA from "react-ga4";
import Proyecto from './components/proyecto/Proyecto'


const PageViewTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

function App() {

  useEffect(() => {
    const apiGoogle= import.meta.env.VITE_GOOGLE_ANALITIC
    ReactGA.initialize(apiGoogle);
  }, []);

  return (
    <>
      <BrowserRouter>
      <PageViewTracker />
      <Header />
       <Routes>
       <Route path='/' element={<SobreMi />} />
       {/* <Route path='/proyectos' element={<Proyectos />} /> */}
       <Route path='/proyectos' element={<Proyecto />} />
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
