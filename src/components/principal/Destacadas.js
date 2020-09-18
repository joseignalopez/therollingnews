import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import "./style/destacadas.css";

const Destacadas = (props) => {

  return (
    <Fragment className="container">
      <section className="row my-3">
        <div className="col-lg-8 col-md-12 col-sm-12">
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
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
              <Card className="bg-dark text-white">
                <Card.Img
                  src="https://ichef.bbci.co.uk/news/660/cpsprodpb/16858/production/_114284229_hi063165582.jpg"
                  alt="Brexit"
                />
                <Card.ImgOverlay className="row align-items-end texto-sm texto">
                  <div>
                    <Card.Title className="texto-sm">
                      Brexit: EU ultimatum to UK over withdrawal deal changes
                    </Card.Title>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
              <Card className="bg-dark text-white">
                <Card.Img
                  src={
                    "https://ichef.bbci.co.uk/news/660/cpsprodpb/90CE/production/_114307073_063249532-1.jpg"
                  }
                  alt="wildfires"
                />
                <Card.ImgOverlay className="row align-items-end texto-sm texto">
                  <div>
                    <Card.Title className="texto-sm">
                      US West Coast wildfires: Nearly 100 fires run rampant
                    </Card.Title>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Destacadas;
