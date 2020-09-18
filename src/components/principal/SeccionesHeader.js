import React from "react";


const SeccionesHeader = () => {
  return (

      <div className="subnav-content d-flex justify-content-center">
        <ul className="d-flex  flex-column flex-lg-row">
        
          <li className="nav-item my-1  ">
              <a className="nav-link " >
            Actualidad
               </a>
          </li> 
          <li className="nav-item my-1">
              <a className=" nav-link" >
            Espectáculos
               </a>
          </li>
          <li className="nav-item my-1 ">
              <a className="nav-link" >
            Tecnología
               </a>
          </li>
          <li className="nav-item my-1">
              <a className=" nav-link">
            Deportes
               </a>
          </li>
          <li className="nav-item my-1">
              <a className=" nav-link" >
            Política
               </a>
          </li>
          <li className="nav-item my-1">
              <a className="nav-link " >
            Economía
               </a>
          </li>
          <li className="nav-item my-1">
              <a className="nav-link " >
                         Salud
               </a>
          </li>
          <li className="nav-item my-1 ">
              <a className="nav-link " >
                       Fotografía
               </a>
          </li>
          <li className="nav-item my-1">
              <a className="nav-link " >
            Covid-19
               </a>
          </li>
        
        </ul>
      </div>
  );
};

export default SeccionesHeader;
