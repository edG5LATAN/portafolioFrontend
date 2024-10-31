import React from 'react'

function Botones({demo, catalogo}) {

  return (
    <div className='container d-flex justify-content-around'>
      <a href={catalogo} target='_blank' className='btn bg-gradient text-bg-dark'>Catalogo</a>
      <a href={demo} target='_blank' className='btn bg-gradient text-bg-dark'>Demo</a>
    </div>
  )
}

export default Botones
