import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Inicio from './components/principal/Inicio';
import MonedaExtr from './components/Api/MonedaExtr';


function App() {
  return (
   
    
    <Router>
      <Header></Header>
      <MonedaExtr></MonedaExtr>
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
