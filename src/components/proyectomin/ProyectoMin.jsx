import React from "react";
import "./ProyectoMin.css";
import { motion } from "framer-motion";
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
        <div className="proyecto_min_botones d-flex justify-content-around align-items-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={vieronProyectosVersionMobile(info.nombre)}
            href={info.demo}
            target="_blank"
            className="btn bg-dark-subtle"
          >
            Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={vieronProyectosVersionMobile(info.nombre)}
            href={info.catalogo}
            target="_blank"
            className="btn bg-dark-subtle"
          >
            Catalago
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ProyectoMin;
