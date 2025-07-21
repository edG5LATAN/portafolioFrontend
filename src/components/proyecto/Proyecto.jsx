import React, { useState } from "react";
import "./Proyecto.css";
import Botones from "../proyectoBotones/Botones.jsx";
import { listProyectos } from "../../listSerice/ListService";
import ProyectoMin from "../proyectomin/ProyectoMin.jsx";

function Proyecto() {
  const [images, setImages] = useState(listProyectos);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <>
      <div className="proyecto_contenedor">
        <div className="proyecto_contenedor_imagen">
          <button onClick={prevImage} className="prev-button proyecto_botones">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f7f1f1ff"
            >
              <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>{" "}
          </button>
          <div className="proyecto_image_container">
            <img
              src={images[currentIndex].img}
              className="proyecto_img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{images[currentIndex].nombre}</h5>
              <p>{images[currentIndex].detalles}</p>
              <Botones
                demo={images[currentIndex].demo}
                catalogo={images[currentIndex].catalogo}
              />
            </div>
          </div>
          <button onClick={nextImage} className="next-button proyecto_botones">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f1efefff"
            >
              <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>{" "}
          </button>
        </div>
      </div>
      <div className="proyectos_escondidos container mb-2 ">
        {listProyectos.map((res, index) => {
          return <ProyectoMin key={index} info={res} />;
        })}
      </div>
    </>
  );
}

export default Proyecto;
