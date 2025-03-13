import React, { useState } from 'react'
import './Proyecto.css'
import Botones from '../proyectoBotones/Botones.jsx'
import { listProyectos } from '../../listSerice/ListService';
import ProyectoMin from '../proyectomin/ProyectoMin.jsx';



function Proyecto() {
  const [images, setImages] = useState(listProyectos)
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <>
    <div className='proyecto_contenedor'>
      <div className="proyecto_contenedor_imagen">
        <button onClick={prevImage} className="prev-button proyecto_botones">{"<"}</button>
        <div className="proyecto_image_container">
          <img src={images[currentIndex].img} className="proyecto_img" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>{images[currentIndex].nombre}</h5>
            <p>{images[currentIndex].detalles}</p>
            <Botones demo={images[currentIndex].demo} catalogo={images[currentIndex].catalogo} />
          </div>
        </div>
        <button onClick={nextImage} className="next-button proyecto_botones">{">"}</button>
      </div>
    </div>
     <div className="proyectos_escondidos container mb-2 ">
     {listProyectos.map((res, index) => {
       return <ProyectoMin key={index} info={res} />;
     })}
   </div>
   </>
  )
}

export default Proyecto