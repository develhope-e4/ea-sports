import React, { useState } from "react";
import "../../App.css";
import "../../styles/index.scss";
import Boton from "../../components/Boton/Boton";
import CardDestacada from "../../components/CardDestacada/CardDestacada";
import Cards from "../../components/Cards/Cards";
import Tabs from "../../components/Tabs/Tabs";
import cardData from "../../data/CardData.mock";
import Icono from "../../components/Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";
import Subscription from "../../components/Subscription/Subscription";
const Development = () => {
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
        <div className="section">
          {cardDestacadaData &&
            cardDestacadaData.map((card) => (
              <CardDestacada
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                showText={true}
              />
            ))}
        </div>
        <div className="">
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
        <div className="section">
          <div className="flex-col-center">
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
          </div>
        </div>
        <div>
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export default Development;
