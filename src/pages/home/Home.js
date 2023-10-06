import LoopVideo from "../../components/LoopVideo/LoopVideo";
import CardDestacada from "../../components/CardDestacada/CardDestacada";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";
import Tabs from "../../components/Tabs/Tabs";
import cardData from "../../data/CardData.mock";
import React, { useState } from "react";
import Cards from "../../components/Cards/Cards";
import Boton from "../../components/Boton/Boton";
import Subscription from "../../components/Subscription/Subscription";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const Home = () => {
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
    <BasePage>
      <div className="container">
        <LoopVideo />
      </div>
      <Section>
        <Container isCentered>
          <h1>Juegos destacados</h1>
        </Container>
        <Container>
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
        </Container>
        <Container isCentered>
          <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton negro")}
            texto={"Últimos juegos"}
          />
        </Container>
      </Section>
      <Section>
        <Container isCentered>
          <h1>Últimas actualizaciones</h1>
        </Container>
        <Container>
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
        </Container>
        <Container isCentered>
          <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton negro")}
            texto={"Leer mas"}
          />
        </Container>
      </Section>
      <Subscription />
    </BasePage>
  );
};

export default Home;
