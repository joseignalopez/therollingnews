import React from "react";
import Card from "react-bootstrap/Card";
import "./style/destacadas.css";

const DestacadaBig = (props) => {
    return (
        <Card className="bg-dark text-white mb-3">
              <Card.Img
                src="https://ichef.bbci.co.uk/news/320/cpsprodpb/6C85/production/_114318772_gettyimages-1175885065.jpg"
                alt="hackers"
              />
              <Card.ImgOverlay className="row align-items-end texto">
                <div>
                  <Card.Title id="titulo">
                    TITULO
                  </Card.Title>
                  <Card.Text id="texto">
                    Hackers with ties to Russia, China and Iran are attempting
                    to snoop on people and groups involved with the US 2020
                    presidential election, Microsoft says.
                  </Card.Text>
                  <Card.Text className="ocultar">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
    );
};

export default DestacadaBig;