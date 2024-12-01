import React from "react";
import "./AsercaDeMi.css";

function AsercaDeMi() {
  return (
    <div className="container asercademi_contenedor">
      <div className="card border-info mb-3 aserca_de_mi_contenedor">
        <div className="card-header text-center fw-bold text-uppercase">Aserca de mi</div>
        <div className="card-body">
          <p className="card-text p-3">
            Soy tecnico en electronica y computacion egresado del INFOP y desarrollador Front-End con conocimientos en las
            areas de HTML, CSS, JS, Bootstrap, React, java, TypeScript, GitHub.<br/>
            Con conocimiento en Backend en Express de NodeJS, Spring Boot de Java.<br/>
            Base da datos MYSQL ORACLE con certificacion de ALURA LATAM, ORACLE y UDEMY. Da click a Proyectos ahi podras ver algunos de los trabajos realizados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AsercaDeMi;
