import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center bg-primary text-light py-4"  variant="dark">
    <div className= "row">
      <div className="col-sm-12 col-md-4 "><p className="lead mt-3">Visitanos</p><a  href="https://www.facebook.com">
      <FontAwesomeIcon  icon={faFacebook }style={{fontSize:"30px"}} color="white"/> {""}</a>
      <a href="https://instagram.com"> <FontAwesomeIcon  icon={faInstagram} color="white" style={{fontSize:"30px"}} /> </a></div>
      <div className="col-sm-12 col-md-4" ><p className="lead mt-3">The Rolling Times</p></div>
     <div className="col-sm-12 col-md-4" ><p className="lead mt-3">Suscribete</p> <a href="https://instagram.com"> </a></div>
     </div>
     <div className="  "><p>&copy; 2020-Todos los derechos reservados</p> </div>
 </footer>
  );
};

export default Footer;
