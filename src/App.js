import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import MonedaExtr from "./components/Api/MonedaExtr";
import Tiempo from "./components/Apiclima/Tiempo";
import Reloj from "./components/Apiclima/Reloj";
import Fecha from "./components/fecha/Fecha";

function App() {
  return (
    <Router>
      <Header></Header>
      <section className="container contenidoSeccion">
        <div className="row text-center d-flex justify-content-center">
          <Fecha className="col-sm-12 col-md-3 col-lg-3 fecha"></Fecha>
          <Tiempo className="col-sm-12 col-md-6 col-lg-6"></Tiempo>
          <Reloj className="col-sm-12 col-md-3 col-lg-3 reloj"></Reloj>
        </div>
      </section>
      <MonedaExtr className="moneda"></MonedaExtr>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
          <Fecha></Fecha>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
