import React from "react";
import Card from "react-bootstrap/Card";
import Destacadas from "./Destacadas";

const Inicio = () => {
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
    </div>
  );
};

export default Inicio;
