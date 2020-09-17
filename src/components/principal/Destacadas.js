import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import DestacadaBig from './DestacadaBig';
import "./style/destacadas.css";

const Destacadas = (props) => {

  return (
    <Fragment className="container">
      <section className="row my-3">
        <div className="col-lg-8 col-md-12 col-sm-12">
            <DestacadaBig></DestacadaBig>
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
