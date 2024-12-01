import React, { useState } from "react";
import "./Hobies.css";
import { listHobies } from "../../listSerice/ListService";

function Hobies() {
  return (
    <div className="container hobies_contenedor pt-3 pb-3">
      <div className="d-flex justify-content-around flex-wrap">
        {listHobies.map((res, index) => {
          return (
            <div key={index} className="card hobies_card">
              <img
                src={res.imagen}
                className="card-img-top"
                alt="estudios img"
              />
              <div className="card-body">
                <h5 className="card-title">{res.nombre}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hobies;
