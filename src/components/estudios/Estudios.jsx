import React from "react";
import "./Estudios.css";
import { listEstudios } from "../../listSerice/ListService";

function Estudios() {

  return (
    <div className="container estudios_contenedor pb-3 pt-3">
      {listEstudios.map((res,index) => {
        return (
          <div key={index} className="card border-info mb-3 estudios_card">
            <div className="card-header fw-bold">{res.nombre}</div>
            <img
              src={res.imagen}
              alt="imagen de hobies"
            />
            <div className="card-body">
              <p className="card-text">
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
