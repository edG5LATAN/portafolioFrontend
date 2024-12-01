import React from 'react'
import ReactGA from "react-ga4";

function Botones({demo, catalogo}) {
   
  const verProyecto="Vieron_proyecto"

  const vieronProyectos=()=>{
    ReactGA.event({
      category: "vieron_demos",
      action: "vieron_demos",
      label: verProyecto,
    });
  }

  return (
    <div className='container d-flex justify-content-around'>
      <a onClick={vieronProyectos} href={catalogo} target='_blank' className='btn bg-gradient text-bg-dark'>Catalogo</a>
      <a onClick={vieronProyectos} href={demo} target='_blank' className='btn bg-gradient text-bg-dark'>Demo</a>
    </div>
  )
}

export default Botones
