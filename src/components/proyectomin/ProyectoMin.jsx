import React from "react";
import "./ProyectoMin.css";

function ProyectoMin({ info }) {
  return (
    <div className="card border-info proyecto_min_contenedor">
      <div className="proyecto_min_contenedor_img">
        <img src={info.img} alt="imagen de proyecto" className="card-img-top" />
      </div>
      <div className="container p-3 proyecto_min_contenedor_card">
        <h2 className="text-uppercase">{info.nombre}</h2>
        <p>{info.detalles}</p>
        <div className="d-flex justify-content-around align-items-center">
          <a href={info.demo} target="_blank" className="btn bg-dark-subtle">
            Demo
          </a>
          <a
            href={info.catalogo}
            target="_blank"
            className="btn bg-dark-subtle"
          >
            Catalago
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProyectoMin;
