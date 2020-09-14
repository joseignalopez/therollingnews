import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultNew from "./defaultNew";
import NewDetail from "./components/new/NewDetail";
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Inicio from './components/principal/Inicio';
import AgregarNoticia from './components/administracion/AgregarNoticia';


function App() {
  const noticias = defaultNew;
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route
          path="/:categoria/nota/:id"
          render={(props) => {
            const idParametro = parseInt(props.match.params.id);
            const cat = props.match.params.categoria;
            const notasCategoria = noticias.filter(
              (n) => n.Categoria === cat
            );
            const nota = notasCategoria.find((item) => item.Id === idParametro);
            
            return(
              <NewDetail noticia = {nota} noticias = {noticias}></NewDetail>
            )
          }}
        ></Route>
        <Route exact path="/:categoria">
          {/* Aqui debemos crear una ventana con todas la noticias de una categoria */}
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <AgregarNoticia></AgregarNoticia>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
