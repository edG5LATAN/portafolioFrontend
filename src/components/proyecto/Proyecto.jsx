import React, { useState } from "react";
import "./Proyecto.css";
import Botones from "../proyectoBotones/Botones.jsx";
import { listProyectos } from "../../listSerice/ListService";
import ProyectoMin from "../proyectomin/ProyectoMin.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Proyecto() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listProyectos.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listProyectos.length) % listProyectos.length
    );
  };

  const currentProject = listProyectos[currentIndex];

  return (
    <>
      <div className="proyecto_contenedor">
        <div className="proyecto_contenedor_imagen">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(10, 110, 240, 0.9)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImage}
            className="prev-button proyecto_botones"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f7f1f1ff"
            >
              <path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </motion.button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="proyecto_image_container"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={currentProject.img}
                className="proyecto_img"
                alt={currentProject.nombre}
                loading="lazy"
              />
              <motion.div 
                className="carousel-caption"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h5>{currentProject.nombre}</h5>
                <p>{currentProject.detalles}</p>
                <Botones
                  demo={currentProject.demo}
                  catalogo={currentProject.catalogo}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(10, 110, 240, 0.9)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImage}
            className="next-button proyecto_botones"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#f1efefff"
            >
              <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      <div className="proyectos_escondidos container mb-2">
        {listProyectos.map((res, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProyectoMin info={res} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Proyecto;