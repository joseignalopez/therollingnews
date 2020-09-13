import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import Tiempo from "./components/Apiclima/Tiempo";
import Reloj from "./components/Apiclima/Reloj";

function App() {
  return (
    <Router>
      <Header></Header>
      <section className="container">
        <div className="row text-center d-flex justify-content-center">
          <Tiempo className="col-sm-12 col-md-9 col-lg-9"></Tiempo>
          <Reloj className="col-sm-12 col-md-3 col-lg-3"></Reloj>
        </div>
      </section>

      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
