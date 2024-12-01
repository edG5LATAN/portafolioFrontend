import React, { useEffect } from "react";
import "./SobreMi.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";



function SobreMi() {

  const descarga="descargado"

  const descargasDeCurriculum=()=>{
    ReactGA.event({
      category: "descarga de curriculum",
      action: "download_portf",
      label: descarga,
    });
  }
  
  useEffect(()=>{
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  },[])


  return (
    <div className="container sobremi_contenedor">
      <div className="sobremi_contenedor_info">
        <h2 className="text-center pb-2 pt-2">Edwin Castro</h2>
        <h3 className="pb-1 pt-1 text-body-emphasis text-center">
          Programador en Front-End y Back-End
        </h3>
        <p>
          Tecnico en electronica y computacion Graduado de Oracle Next education
          con Alura Latam, certificados con Udemy en JavaScript, HTML, CSS, JS,
          React, Java, SpringBoot, GitHub, Base de datos MYSQL, conocimiento en
          base de datos ORACLE.
        </p>
        <div className="sobremi_contendor_iconos_redes">
          <a
            href="https://github.com/edG5LATAN?tab=repositories"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="GitHub"
          >
            <i className="fs-3 bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/edwin-castro-13a763272/recent-activity/all/"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Linkedin"
          >
            <i className="fs-3 bi bi-linkedin text-primary"></i>
          </a>
          <a
          onClick={descargasDeCurriculum}
            href="./document/curriculumVitae.pdf"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Curriculum"
          >
            <i className="fs-3 bi bi-file-earmark-person text-success"></i>
          </a>
          <a
            href="https://app.aluracursos.com/emprega-one/profile/castromaradiaga0"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Certificados"
          >
            <i className="fs-3 bi bi-mortarboard-fill"></i>
          </a>
        </div>
        <div>
          <Link className="btn btn-primary" to={"/asercaDeMi"}>
            Mas SobreMi
          </Link>
        </div>
      </div>
      <div className="sobremi_contenedor_img">
        <img src="/logoRemove.png" alt="imagen de portada" />
      </div>
    </div>
  );
}

export default SobreMi;
