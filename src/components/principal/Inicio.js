import React, { useState } from "react";
import Categories from "./Categories";
import Card from "react-bootstrap/Card";
import Destacadas from "./Destacadas";

   


const Inicio = () => {
  const [categorias, setCategorias] = useState([
    "Actualidad",
    "Espectaculos",
    "Tecnologia",
    "Deportes",
    "Politica",
    "Economia",
    "Salud",
    "Fotografia",
  ])
  return (
    <div className="container">
      <Destacadas></Destacadas>
      <section className="row">
        <div className="col-md-6 my-3">
          <Card>
            <Card.Img variant="top" src="img1.jpg" />
            <Card.Body>
              <Card.Text className="">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className=" col-md-3 my-3 ">
          <Card>
            <Card.Img variant="top" src="img1.jpg" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-3">
          <Card>
            <Card.Img variant="top" src="img1.jpg" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      
      <Categories categorias = {categorias}></Categories>
    </div>
  );
};

export default Inicio;
