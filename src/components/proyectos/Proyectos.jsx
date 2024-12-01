import React, { useState } from "react";
import "./Proyectos.css";
import Botones from "../proyectoBotones/Botones";
import ProyectoMin from "../proyectomin/ProyectoMin";
import { listProyectos } from "../../listSerice/ListService";

function Proyectos() {
  const [data, setdata] = useState(listProyectos);
  return (
    <>
      <div className="container pt-3 pb-3 proyectos_contenedor">
        <div
          id="carouselExampleCaptions"
          className="carousel slide bg"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="8"
              aria-label="Slide 9"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={data[0].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[0].nombre}</h5>
                <p>{data[0].detalles}</p>
                <Botones demo={data[0].demo} catalogo={data[0].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[1].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[1].nombre}</h5>
                <p>{data[1].detalles}</p>
                <Botones demo={data[1].demo} catalogo={data[1].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[2].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[2].nombre}</h5>
                <p>{data[2].detalles}</p>
                <Botones demo={data[2].demo} catalogo={data[2].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[3].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[3].nombre}</h5>
                <p>{data[3].detalles}</p>
                <Botones demo={data[3].demo} catalogo={data[3].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[4].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[4].nombre}</h5>
                <p>{data[4].detalles}</p>
                <Botones demo={data[4].demo} catalogo={data[4].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[5].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[5].nombre}</h5>
                <p>{data[5].detalles}</p>
                <Botones demo={data[5].demo} catalogo={data[5].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[6].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[6].nombre}</h5>
                <p>{data[6].detalles}</p>
                <Botones demo={data[6].demo} catalogo={data[6].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[7].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[7].nombre}</h5>
                <p>{data[7].detalles}</p>
                <Botones demo={data[7].demo} catalogo={data[7].catalogo} />
              </div>
            </div>
            <div className="carousel-item">
              <img src={data[8].img} className="d-block proyectos_img" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data[8].nombre}</h5>
                <p>{data[8].detalles}</p>
                <Botones demo={data[8].demo} catalogo={data[8].catalogo} />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="caroucel_contrl carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon caroucel_contrl"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="proyectos_escondidos container mb-2 ">
        {listProyectos.map((res, index) => {
          return <ProyectoMin key={index} info={res} />;
        })}
      </div>
    </>
  );
}

export default Proyectos;
