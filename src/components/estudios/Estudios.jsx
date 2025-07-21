import React from "react";
import "./Estudios.css";
import { listEstudios } from "../../listSerice/ListService";
import { easeInOut, motion } from "framer-motion";

function Estudios() {
  return (
    <div className="container estudios_contenedor pb-3 pt-3">
      {listEstudios.map((res, index) => {
        return (
          <motion.div
            className="card border-info mb-3 estudios_card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              cursor: "pointer",
              scale: 1.02,
              transition: easeInOut,
              duration: 0.3,
            }}
            key={index}
          >
            <div className="card-header fw-bold">{res.nombre}</div>
            <img src={res.imagen} alt="imagen de hobies" />
            <div className="card-body">
              <p className="card-text">{res.descripcion}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Estudios;
