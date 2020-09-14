import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Inicio from './components/principal/Inicio';
import Ingresar from "./components/login/Ingresar";


function App() {
  return (
    
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/login/Ingresar">
          <Ingresar></Ingresar>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
