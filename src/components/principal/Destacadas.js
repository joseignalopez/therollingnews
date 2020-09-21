import React, { Fragment/* , useState */ } from "react";
import Card from "react-bootstrap/Card";
import "./style/destacadas.css";

const Destacadas = (props) => {
  
  return (
    <Fragment>
      <section className="container justify-content-center row my-5 d-none d-md-block">
  <h1>{props.destacada._id}</h1>
        <div className="col-lg-12 col-md-12 row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <Card className="bg-dark text-white mb-lg-4 mb-3">
              <Card.Img src={props.destacadaBig.url} alt={props.destacadaBig.titulo} />
              <Card.ImgOverlay className="row align-items-end">
                <div className="shade p-1">
                  <Card.Title className="titulo">
                    {props.destacadaBig.titulo}
                  </Card.Title>
                  <Card.Text className="texto ocultar">
                    {props.destacadaBig.detalleCorto}
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                <Card className="bg-dark text-white">
                  <Card.Img src={props.destacadaSmall1.url} alt={props.destacadaSmall1.titulo} />
                  <Card.ImgOverlay className="row align-items-end texto-sm texto">
                    <div className="shade p-1">
                      <Card.Title className="texto-sm">
                        {props.destacadaSmall1.titulo}
                      </Card.Title>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={props.destacadaSmall2.url}
                    alt={props.destacadaSmall2.titulo}
                  />
                  <Card.ImgOverlay className="row align-items-end texto-sm texto">
                    <div className="shade p-1">
                      <Card.Title className="texto-sm">
                        {props.destacadaSmall2.titulo}
                      </Card.Title>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Destacadas;
