import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import "./destacadas.css";

const Destacadas = () => {
  return (
    <Fragment className="container">
      <h1 className="lead mt-5">
        <u>Noticias Destacadas</u>
      </h1>
      <section className="row my-3">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Card className="bg-dark text-white mb-3">
            <Card.Img
              src="https://ichef.bbci.co.uk/news/320/cpsprodpb/6C85/production/_114318772_gettyimages-1175885065.jpg"
              alt="hackers"
            />
            <Card.ImgOverlay className="row align-items-end texto">
              <div>
                <Card.Title>
                  Russia, China and Iran hackers target Trump and Biden,
                  Microsoft sayss
                </Card.Title>
                <Card.Text>
                  Hackers with ties to Russia, China and Iran are attempting to
                  snoop on people and groups involved with the US 2020
                  presidential election, Microsoft says.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
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
                <Card.Text>
                  Drop plans to rewrite withdrawal agreement by end of month or
                  risk scuppering trade deal, UK is told.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white mt-3">
            <Card.Img
              src="https://ichef.bbci.co.uk/news/660/cpsprodpb/90CE/production/_114307073_063249532-1.jpg"
              alt="wildfires"
            />
            <Card.ImgOverlay className="row align-items-end texto-sm texto">
              <div>
                <Card.Title className="texto-sm">
                  US West Coast wildfires: Nearly 100 fires run rampant
                </Card.Title>
                <Card.Text>
                  Western US states are battling nearly 100 wildfires that have
                  caused at least seven deaths, displaced thousands and
                  destroyed whole towns.
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </section>
    </Fragment>
  );
};

export default Destacadas;
