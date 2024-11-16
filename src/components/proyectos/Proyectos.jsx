import React, { useState } from "react";
import "./Proyectos.css";
import Botones from "../proyectoBotones/Botones";
import ProyectoMin from "../proyectomin/ProyectoMin";

function Proyectos() {
  const [data, setdata] = useState([
    {
      img: "./img/trabajos/aluraflixImg.png",
      nombre: "Alura Flix",
      detalles:
        "Proyecto aluraFlix donde podras guardar todos tus videos favoritos, creado en React y Express NodeJS.",
      demo: "https://alura-flix-videoestudio-cc26e8.netlify.app/",
      catalogo: "https://www.youtube.com/watch?v=bmI1C-HTBXk",
    },
    {
      img: "https://i.pinimg.com/originals/c5/dd/c2/c5ddc2e3b83e80fc0703061553819d59.png",
      nombre: "Taller de Reparacion",
      detalles:
        "Proyecto de uno de mis primeros trabajos ahora ya actualizado con la version V1.0.1 donde implementamos mas informacion.",
      demo: "https://tecnicare-taller-v1-0-1.vercel.app/",
      catalago: "https://tecnicare-taller-v1-0-1.vercel.app/",
    },
    {
      img: "./img/trabajos/aluraGeek.png",
      nombre: "Alura Geek",
      detalles:
        "Proyecto de tienda en linea de venta de video juegos para distintas consolas, creado en HTML, CSS, JS, Express.",
      demo: "https://www.youtube.com/watch?v=RS3zDOXRXd8",
      catalogo: "https://edg5latan.github.io/AluraGeek/",
    },
    {
      img: "./img/trabajos/calculadora.png",
      nombre: "Calculadora",
      detalles:
        "Proyecto de calculadora con funcionalidad y creado con HTML,  JS, CSS.",
      demo: "https://newcalculadorasimple.netlify.app/",
      catalogo: "https://newcalculadorasimple.netlify.app/",
    },
    {
      img: "https://i.pinimg.com/originals/f7/1f/eb/f71feb2181b9c5b123afd89efa0ceb06.png",
      nombre: "pagina de Comedor",
      detalles:
        "Pagina web de comedor con opcion de carrito de compras creado en React y Express.",
      demo: "https://www.youtube.com/watch?v=SZdvNte-7wQ",
      catalogo: "https://comedor.netlify.app/",
    },
    {
      img: "./img/trabajos/encriptarImg.png",
      nombre: "Encriptador de Mensajes",
      detalles:
        "Encriptador de mensajes con opcion de compartir y enviar notas encriptadas.",
      demo: "https://www.youtube.com/watch?v=NwyPIM1q0-k",
      catalogo: "https://edg5latan.github.io/EncriptadorG5/",
    },
    {
      img: "https://i.pinimg.com/originals/08/ec/85/08ec858075dd7dd53888d6c935b26eac.jpg",
      nombre: "Aplicaciond de Clima ",
      detalles:
        "Pagina web climatica v1.0.1 por  regiones de tu pais con opcion de tiempo de hasta 7 dias.",
      demo: "https://www.youtube.com/watch?v=-WmSWJYzfgs&feature=youtu.be",
      catalogo: "https://new-app-clima-v1-0-1.vercel.app/",
    },
    {
      img: "https://i.pinimg.com/originals/87/64/e6/8764e64965d03239eb8d73286ab5ba62.png",
      nombre: "Pagina Web",
      detalles:
        "Proyecto de pagina web de informacion de reparaciones telefonicas y ventas de accesorios telefonia y tecnologia.",
      demo: "https://edtecnology.com/",
      catalogo: "https://edtecnology.com/",
    },
    {
      img: "./img/trabajos/marvelPortada.png",
      nombre: "Api de Marvel",
      detalles:
        "Pagina de informacion de api de Marvel con informacion detallada de cada personaje creado en React.",
      demo: "https://www.youtube.com/watch?v=WAq5MRVzp0g",
      catalogo: "https://marvel-proyect-api.vercel.app/",
    },
    {
      img: "https://i.pinimg.com/originals/1f/67/9b/1f679b074f0fbb94e1531362dce7b730.png",
      nombre: "Pagina de Lavanderia",
      detalles:
        "Pagina de lavanderia v1.0.1 ya que la version anterior le hicimos un cambio de imagen y detalles.",
      demo: "https://api-lavanderiav1-0-1.vercel.app/",
      catalogo: "https://api-lavanderiav1-0-1.vercel.app/",
    },
  ]);
  return (
    <>
      <div className="container pt-3 pb-3 proyectos_contenedor">
        <div
          id="carouselExampleCaptions"
          class="carousel slide bg"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators ">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
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
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={data[0].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[0].nombre}</h5>
                <p>{data[0].detalles}</p>
                <Botones demo={data[0].demo} catalogo={data[0].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[1].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[1].nombre}</h5>
                <p>{data[1].detalles}</p>
                <Botones demo={data[1].demo} catalogo={data[1].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[2].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[2].nombre}</h5>
                <p>{data[2].detalles}</p>
                <Botones demo={data[2].demo} catalogo={data[2].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[3].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[3].nombre}</h5>
                <p>{data[3].detalles}</p>
                <Botones demo={data[3].demo} catalogo={data[3].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[4].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[4].nombre}</h5>
                <p>{data[4].detalles}</p>
                <Botones demo={data[4].demo} catalogo={data[4].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[5].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[5].nombre}</h5>
                <p>{data[5].detalles}</p>
                <Botones demo={data[5].demo} catalogo={data[5].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[6].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[6].nombre}</h5>
                <p>{data[6].detalles}</p>
                <Botones demo={data[6].demo} catalogo={data[6].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[7].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[7].nombre}</h5>
                <p>{data[7].detalles}</p>
                <Botones demo={data[7].demo} catalogo={data[7].catalogo} />
              </div>
            </div>
            <div class="carousel-item">
              <img src={data[8].img} class="d-block proyectos_img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{data[8].nombre}</h5>
                <p>{data[8].detalles}</p>
                <Botones demo={data[8].demo} catalogo={data[8].catalogo} />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              class="caroucel_contrl carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon caroucel_contrl"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="proyectos_escondidos container mb-2 ">
        {data.map((res) => {
          return <ProyectoMin info={res} />;
        })}
      </div>
    </>
  );
}

export default Proyectos;
