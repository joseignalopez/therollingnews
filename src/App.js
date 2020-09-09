import React from 'react';
import './App.css';
import './bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inicio from './components/principal/Inicio';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
    <Header></Header>
    <Switch>
      <Route  exact path="/">
        <Inicio></Inicio>
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>
  );
}

export default App;
