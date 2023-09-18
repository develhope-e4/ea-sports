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

import Icono from "./components/Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import IconoEjemplo from "./assets/iconos/IconoEjemplo";
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
            <Icono
              xmlns={"http://www.w3.org/2000/svg"}
              width={"23px"}
              height={"23px"}
              viewBox={"0 0 23 23"}
              version={"1.1"}
              d={
                "M 11.5 14.375 C 9.914062 14.375 8.625 13.085938 8.625 11.5 C 8.625 9.914062 9.914062 8.625 11.5 8.625 C 13.085938 8.625 14.375 9.914062 14.375 11.5 C 14.375 13.085938 13.085938 14.375 11.5 14.375 Z M 14.375 4.3125 C 14.375 2.726562 13.085938 1.4375 11.5 1.4375 C 9.914062 1.4375 8.625 2.726562 8.625 4.3125 C 8.625 5.898438 9.914062 7.1875 11.5 7.1875 C 13.085938 7.1875 14.375 5.898438 14.375 4.3125 Z M 14.375 18.6875 C 14.375 17.101562 13.085938 15.8125 11.5 15.8125 C 9.914062 15.8125 8.625 17.101562 8.625 18.6875 C 8.625 20.273438 9.914062 21.5625 11.5 21.5625 C 13.085938 21.5625 14.375 20.273438 14.375 18.6875 Z M 14.375 18.6875 "
              }
            />
          </div>
          <div className="tabs-cards">
            <div className="tabs">
              {Object.keys(cardData).map((tab, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tabNames[tab]}{" "}
                  {/* Utilizamos el nombre personalizado aquí */}
                </div>
              ))}
            </div>
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
          <Icono icono={<BsThreeDotsVertical style={{ fill: "white" }} />} />
          <Icono icono={<AiOutlineMenu style={{ fill: "white" }} />} />
          <Icono icono={<IconoEjemplo />} />
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
