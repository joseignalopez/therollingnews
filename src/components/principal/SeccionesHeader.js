import React from "react";


const SeccionesHeader = () => {
  return (

      <div className="subnav-content d-flex justify-content-center">
        <ul className="d-flex  flex-column flex-lg-row">
        
          <li className="nav-item my-1  ">
              <a className="nav-link " href="session/actualidad">
            Actualidad
               </a>
          </li> 
          <li className="nav-item my-1">
              <a className=" nav-link" href="session/espectaculo" >
            Espectáculos
               </a>
          </li>
          <li className="nav-item my-1 ">
              <a className="nav-link" href="session/tecnologia">
            Tecnología
               </a>
          </li>
          <li className="nav-item my-1">
              <a className=" nav-link" href="session/deportes">
            Deportes
               </a>
          </li>
          <li className="nav-item my-1">
              <a className=" nav-link" href="session/politica">
            Política
               </a>
          </li>
          <li className="nav-item my-1">
              <a className="nav-link " href="session/economia" >
            Economía
               </a>
          </li>
          <li className="nav-item my-1">
              <a className="nav-link "href="session/salud">
                         Salud
               </a>
          </li>
          <li className="nav-item my-1 ">
              <a className="nav-link " href="session/fotografia">
                       Fotografía
               </a>
          </li>
          <li className="nav-item my-1" >
              <a className="nav-link "href="session/covid19" >
            Covid-19
               </a>
          </li>
        
        </ul>
      </div>
  );
};

export default SeccionesHeader;
