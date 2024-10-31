import React, { useState } from "react";
import "./Proyectos.css";
import Botones from "../proyectoBotones/Botones";

function Proyectos() {
  const [data, setdata] = useState([
    {
      img: "./img/trabajos/aluraflixImg.png",
      nombre: "alura flix",
      detalles:
        "Proyecto alura flix donde podras guardar todos tus videos favoritos creado en React y Express NodeJS ",
      demo: "https://alura-flix-videoestudio-cc26e8.netlify.app/",
      catalogo: "https://www.youtube.com/watch?v=bmI1C-HTBXk",
    },
    {
      img: "./img/trabajos/aluraGeek.png",
      nombre: "alura geek",
      detalles:
        "Api de marvel implementada para busqueda de personajes creado en React y Express de NodeJs",
      demo: "https://www.youtube.com/watch?v=RS3zDOXRXd8",
      catalogo: "https://edg5latan.github.io/AluraGeek/",
    },
    {
      img: "./img/trabajos/calculadora.png",
      nombre: "calculadora",
      detalles:
        "Proyecto de calculadora con funcionalidad y creado con HTML,  JS, CSS",
      demo: "https://newcalculadorasimple.netlify.app/",
      catalogo: "https://newcalculadorasimple.netlify.app/",
    },
    {
      img: "./img/trabajos/comedor_img.png",
      nombre: "pagina de comedor",
      detalles:
        "Pagina web de comedor con opcion de carrito de compras creado en React y Express",
      demo: "https://www.youtube.com/watch?v=SZdvNte-7wQ",
      catalogo: "https://edg5latan.github.io/proyecto_comedor/",
    },
    {
      img: "./img/trabajos/encriptarImg.png",
      nombre: "encriptador de mensajes",
      detalles:
        "Encriptador de mensajes con opcion de compartir y enviar notas encriptadas",
      demo: "https://www.youtube.com/watch?v=NwyPIM1q0-k",
      catalogo: "https://edg5latan.github.io/EncriptadorG5/",
    },
    {
      img: "./img/trabajos/imagenApiWather.png",
      nombre: "aplicaciond de clima",
      detalles:
        "Pagina web de informacion climatica por  regiones de tu pais con opcion de tiempo de hasta 7 dias",
      demo: "https://www.youtube.com/watch?v=-WmSWJYzfgs&feature=youtu.be",
      catalogo: "https://weather-app-sigma-gott-85.vercel.app/",
    },
    {
      img: "./img/trabajos/imagenChuckNorris.png",
      nombre: "juego de chuck norris",
      detalles:
        "Proyecto de Juego de chiste de chuck norris donde podras reir de las ocurrencias de cada uno",
      demo: "https://www.youtube.com/watch?v=hGdKBAx9qvE&feature=youtu.be",
      catalogo: "https://chuck-norrys-joks.vercel.app/",
    },
    {
      img: "./img/trabajos/marvelPortada.png",
      nombre: "Api de marvel",
      detalles:
        "Pagina de informacion de api de Marvel con informacion detallada de cada personaje creado en React",
      demo: "https://www.youtube.com/watch?v=WAq5MRVzp0g",
      catalogo: "https://marvel-proyect-api.vercel.app/",
    },
    {
      img: "./img/trabajos/mentalista.png",
      nombre: "juego de mentalista",
      detalles:
        "Divertido Juego de adivinanzas donde podras jugar on line con tus amigos adivinando cada respuesta",
      demo: "https://edg5latan.github.io/juegoAdivinanzaAlura/",
      catalogo: "https://edg5latan.github.io/juegoAdivinanzaAlura/",
    },
  ]);
  return (
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
  );
}

export default Proyectos;
