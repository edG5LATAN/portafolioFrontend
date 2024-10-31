import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_contenedor d-flex justify-content-between bg-info">
      <ul class="nav nav-underline fw-semibold">
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to={"/"}>
            Sobre mi
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to={"/proyectos"}>
            Proyectos
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to={"/hobies"}>
            Hobies
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to={"/estudios"}>
            Estudios
          </Link>
        </li>
      </ul>
      <div className="header_contenedor_img">
        <Link to={'/'} className="header_contenedor_img">
          <img
            src="https://i.pinimg.com/originals/79/af/8d/79af8d9946ab024aeff1d9d6929af8a0.png"
            alt="logo de header"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
