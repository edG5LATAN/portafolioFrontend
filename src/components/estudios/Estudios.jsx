import React, { useState } from "react";
import "./Estudios.css";

function Estudios() {
  const [data, setdata] = useState([
    {
      imagen: "./img/estudios/alura1.jpg",
      nombre: "Alura Latan",
      descripcion:
        "Frontend con React y Js Backend con java SpringBoot Python para DataScience Mysql base de datos Aministrador Mysql Server",
    },
    {
      imagen: "./img/estudios/Infop.jpg",
      nombre: "INFOP",
      descripcion:
        "Tecnico en electronica general y en computacion y mantenimiento de impresoras y computadoras instalacion de software.",
    },
    {
      imagen: "./img/estudios/oracle.jpg",
      nombre: "ORACLE",
      descripcion:
        "Formación de Oracle Cloud Infrastructure conceptos basicos de computacion en nubes para comprender su arquitectura de Oracle Cloud para crear servicios en la nube redes virtuales y load balancer.",
    },
    {
      imagen: "./img/estudios/udemy.png",
      nombre: "UDEMY",
      descripcion:
        "Buenas practicas de Javascript, dominio y manejo de las variables, array, creacion de proyectos usando Js Html y Css, uso de fetch y recursos de api ",
    },
    {
      imagen: "./img/estudios/universidadPedagogica.png",
      nombre: "Universidad Pedagogico",
      descripcion:
        "Diplomado de ingles para comprendimiento y manejo comunicativo para leer manuales tecnicos en reparaciones y entablar conversaciones ",
    },
  ]);

  return (
    <div className="container estudios_contenedor pb-3 pt-3">
      {data.map((res) => {
        return (
          <div class="card border-info mb-3 estudios_card">
            <div class="card-header fw-bold">{res.nombre}</div>
            <img
              src={res.imagen}
              alt="imagen de hobies"
            />
            <div class="card-body">
              <p class="card-text">
                {res.descripcion}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Estudios;
