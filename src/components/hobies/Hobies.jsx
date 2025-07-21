import React, { useState } from "react";
import "./Hobies.css";
import { listHobies } from "../../listSerice/ListService";
import { motion } from "framer-motion";

function Hobies() {
  return (
    <div className="container hobies_contenedor pt-3 pb-3">
      <div className="d-flex justify-content-around flex-wrap">
        {listHobies.map((res, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
              cursor: "pointer",
              scale: 1.02,
              transition: "easeInOut",
              duration: 0.3,
            }}
              key={index}
              className="card hobies_card"
            >
              <img
                src={res.imagen}
                className="card-img-top"
                alt="estudios img"
              />
              <div className="card-body">
                <h5 className="card-title">{res.nombre}</h5>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Hobies;
