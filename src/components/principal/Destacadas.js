import React, { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import "./style/destacadas.css";

const Destacadas = (props) => {
  return (
    <Fragment>
      <section className="container justify-content-center row my-5 d-none d-md-block">
        <div className="col-lg-12 col-md-12 row">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <Card className="bg-dark text-white mb-lg-4 mb-3">
              <Card.Img src={props.destacadaBig.Imagen} alt={props.destacadaBig.Titulo} />
              <Card.ImgOverlay className="row align-items-end">
                <div className="shade p-1">
                  <Card.Title className="titulo">
                    {props.destacadaBig.Titulo}
                  </Card.Title>
                  <Card.Text className="texto ocultar">
                    {props.destacadaBig.DetalleCorto}
                  </Card.Text>
                </div>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                <Card className="bg-dark text-white">
                  <Card.Img src={props.destacadaSmall1.Imagen} alt={props.destacadaSmall1.Titulo} />
                  <Card.ImgOverlay className="row align-items-end texto-sm texto">
                    <div className="shade p-1">
                      <Card.Title className="texto-sm">
                        {props.destacadaSmall1.Titulo}
                      </Card.Title>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={props.destacadaSmall2.Imagen}
                    alt={props.destacadaSmall2.Titulo}
                  />
                  <Card.ImgOverlay className="row align-items-end texto-sm texto">
                    <div className="shade p-1">
                      <Card.Title className="texto-sm">
                        {props.destacadaSmall2.Titulo}
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
