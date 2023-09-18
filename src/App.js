import React, { useState } from "react";
import "./App.css";
import "./styles/index.scss";
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Development from "./pages/development/Development";
import Home from "./pages/home/Home";

=======
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import CardDestacada from "./components/CardDestacada/CardDestacada";
import HighlightGroup from "./components/Highlight-Group/Highlight-Group";
>>>>>>> dc0d00c (feat: Subiendo seccion de cards destacadas agrupadas)
function App() {
  const [activeTab, setActiveTab] = useState("NoticiasEA");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabNames = {
    NoticiasEA: "Noticias De EA",
    EASPORTSFC: "EA SPORTS FC",
    StarWars: "Star Wars",
    ApexLegends: "Apex Legends",
    LosSims4: "Los Sims 4",
    F1: "F1",
    Battlefield: "Battlefield",
  };

  return (
<<<<<<< HEAD
    <BrowserRouter>
      {/* Aca va el elemento NAVBAR */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/dev" element={<Development />} />
      </Routes>
      {/* Aca va el elemento FOOTER */}
    </BrowserRouter>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex-col-center">
          {/**
           * Manera de invocar a mi componente reutilizable
           */}
          <EjemploComponente
            esPrimario={true}
            texto={"Boton primario"}
            onClick={() => console.log("click en el boton primario")}
          />
          <EjemploComponente
            esPrimario={false}
            texto={"Boton secundario"}
            onClick={() => console.log("click en el boton secundario")}
          />
          <EjemploComponente
            esPrimario={false}
            disabled={true}
            onClick={() => console.log("click en el boton disabled")}
            texto={"Boton secundario"}
          />
          <Boton
            esPrimario={true}
            isLight={false}
            onClick={() => console.log("click en el boton dorado")}
            texto={"Comprar ahora"}
            />
            <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton negro")}
            texto={"Últimos juegos"}
            />
            <Boton
            esPrimario={false}
            isLight={true}
            onClick={() => console.log("click en el boton blanco")}
            texto={"Únete ya"}
            />


            

            <CardDestacada
            url="http://google.com"
            backgroundImage="./highlight/1/bg.png"
            gameLogo="./highlight/1/logo.svg"
            />

            <HighlightGroup/>
        

         
           
        </div>

      

      </header>
    </div>
>>>>>>> dc0d00c (feat: Subiendo seccion de cards destacadas agrupadas)
  );
}

export default App;
