import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="rojo">
      <section className="container py-4">
        <div className="text-center row text-light">
          <div className="col-sm-12 col-md-4 list-unstyled mb-4 d-flex flex-column justify-content-around">
              <li className="pb-1"><a href="#" className="text-light">Acerca de nosotros</a></li>
              <li className="py-1"><a href="#" className="text-light">Términos y condiciones</a></li>
              <li className="py-1"><a href="#" className="text-light">Cookies</a></li>
              <li className="py-1"><a href="#" className="text-light">Contacto</a></li>
              <li className="py-1"><a href="#" className="text-light">Publicitar con nosotros</a></li>
              <li className="pt-1"><a href="#" className="text-light">Políticas de privacidad</a></li>
          </div>
          <div className="col-sm-12 col-md-4 sm-mb-4">
            <img src="img1.jpg" width="70%" alt="The Rolling Times"/>
            <ul className="list-unstyled d-flex justify-content-center p-0 mt-4">
                <li><a href="https://facebook.com" target="_blank" className="text-light mr-2"><FontAwesomeIcon icon={faFacebookSquare} size="3x"></FontAwesomeIcon></a></li>
                <li><a href="https://instagram.com" target="_blank" className="text-light mx-2"><FontAwesomeIcon icon={faInstagramSquare} size="3x"></FontAwesomeIcon></a></li>
                <li><a href="https://twitter.com" target="_blank" className="text-light mx-2"><FontAwesomeIcon icon={faTwitterSquare} size="3x"></FontAwesomeIcon></a></li>
                <li><a href="https://gmail.com" target="_blank" className="text-light ml-2"><FontAwesomeIcon icon={faEnvelope} size="3x"></FontAwesomeIcon></a></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-4 list-unstyled d-flex flex-column justify-content-around"> 
                <li className="pb-1"><a href="#" className="text-light"><b>Secciones:</b></a></li>
                <li className="py-1"><a href="#" className="text-light">Actualidad</a></li>
                <li className="py-1"><a href="#" className="text-light">Espectáculos</a></li>
                <li className="py-1"><a href="#" className="text-light">Tecnología</a></li>
                <li className="py-1"><a href="#" className="text-light">Deportes</a></li>
                <li className="pt-1"><a href="#" className="text-light">Política</a></li>
                <li className="pt-1"><a href="#" className="text-light">Economía</a></li>
                <li className="pt-1"><a href="#" className="text-light">Salud</a></li>      
          </div>
        </div>
      </section>
      <footer className="text-center py-2 bg-dark text-light">
        &copy; Todos los derechos reservados - The Rolling Times
      </footer>
    </div>
  );
};

export default Footer;
