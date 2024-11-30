import React, { useState } from "react";
import './Hobies.css'


function Hobies() {

  const [data,setdata]=useState([
    {
      nombre:"Developer",
      imagen:"./img/pasatiempos/aprender.png",
    },
    {
      nombre:"Baloncesto",
      imagen:"./img/pasatiempos/baloncesto.jpg",
    },
    {
      nombre:"codificar",
      imagen:"./img/pasatiempos/codificar.jpg",
    },
    {
      nombre:"manga",
      imagen:"./img/pasatiempos/manga.jpg",
    },
    {
      nombre:"reparar",
      imagen:"./img/pasatiempos/reparar.jpg",
    },
    {
      nombre:"videojuegos",
      imagen:"./img/pasatiempos/videojuegos.jpg",
    }
  ])



  return (
    <div className="container hobies_contenedor pt-3 pb-3">
      <div class="d-flex justify-content-around flex-wrap">
      {
        data.map((res,index)=>{
          return <div key={index} class="card hobies_card">
          <img src={res.imagen} class="card-img-top" alt="estudios img" />
          <div class="card-body">
            <h5 class="card-title">{res.nombre}</h5>
          </div>
        </div>
        })}
        
        
      </div>
    </div>
  );
}

export default Hobies;
