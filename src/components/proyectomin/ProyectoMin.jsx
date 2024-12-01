import React from "react";
import "./ProyectoMin.css";
import ReactGA from "react-ga4";

function ProyectoMin({ info }) {
  const vieronProyectosVersionMobile = (titulo) => {
    ReactGA.event({
      category: "proyectos_version_mobile",
      action: "version_mobile",
      label: titulo,
    });
  };

  return (
    <div className="card border-info proyecto_min_contenedor">
      <div className="proyecto_min_contenedor_img">
        <img src={info.img} alt="imagen de proyecto" className="card-img-top" />
      </div>
      <div className="container p-3 proyecto_min_contenedor_card">
        <h2 className="text-uppercase">{info.nombre}</h2>
        <p>{info.detalles}</p>
        <div className="d-flex justify-content-around align-items-center">
          <a
            onClick={vieronProyectosVersionMobile(info.nombre)}
            href={info.demo}
            target="_blank"
            className="btn bg-dark-subtle"
          >
            Demo
          </a>
          <a
            onClick={vieronProyectosVersionMobile(info.nombre)}
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
