import React, { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./components/EjemploComponente/EjemploComponente";
import Boton from "./components/Boton/Boton";
import CardDestacada from "./components/CardDestacada/CardDestacada";
import TextoLinks from "./components/Footer/Footer";
import Card from "./components/Cards/Cards";
import Cards from "./components/Cards/Cards";
import Tabs from "./components/Tabs/Tabs";
import cardData from "./data/CardData.mock";

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
    <div className="App">
      <div className="flex-col-center">
        <div className="ultimas-actualizaciones">
          <h1>Últimas actualizaciones</h1>
        </div>
        <div className="tabs-cards">
          <div className="tabs">
            {Object.keys(cardData).map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tabNames[tab]} {/* Utilizamos el nombre personalizado aquí */}
              </div>
            ))}
          </div>

          <div className="card-container">
            {cardData[activeTab] ? (
              cardData[activeTab].map((card, index) => (
                <Cards
                  key={`${index}-${card.nombre}`}
                  imagenSrc={card.imagenSrc}
                  nombre={card.nombre}
                  fecha={card.fecha}
                  titulo={card.titulo}
                  texto={card.texto}
                />
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
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
        <CardDestacada backgroundImage="eafc24.png" gameLogo="EAlogo.svg" />
        <TextoLinks />
        <div className="flex-col-center">
          <div className="ultimas-actualizaciones">
            <h1>Últimas actualizaciones</h1>
          </div>
          <div className="tabs-cards">
            <Tabs
              tabNames={tabNames}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
            />
            <div className="card-container">
              {cardData[activeTab] ? (
                cardData[activeTab].map((card, index) => (
                  <Cards
                    key={`${index}-${card.nombre}`}
                    imagenSrc={card.imagenSrc}
                    nombre={card.nombre}
                    fecha={card.fecha}
                    titulo={card.titulo}
                    texto={card.texto}
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default App;
