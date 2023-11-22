import { useState } from "react";
import BasePage from "../../components/BasePage/BasePage";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import LoopVideo from "../../components/LoopVideo/LoopVideo";
import Cards from "../../components/Cards/Cards";
import Tabs from "../../components/Tabs/Tabs";
import cardData from "../../data/CardData.mock";
import Boton from "../../components/Boton/Boton";
import Subscription from "../../components/Subscription/Subscription";
import { CardsDestacadas } from "../../components/CardsDestacadas/CardsDestacadas";
import classes from "../../components/Tabs/Tabs.module.scss"
import styles from "../../components/Cards/Cards.module.scss"


const Home = () => {
  const [activeTab, setActiveTab] = useState("NoticiasEA");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleButtonClick = () => {
    console.log("Click en el botón dorado");
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
        <LoopVideo
          videoSrc="./immortals.mp4"
          imagenSrc="./Immorlas-Logo.svg"
          buttonText="Comprar ahora"
          onButtonClick={handleButtonClick}
          isPrimary={true}
          isLight={false}
          customClass=""
          customImageClass=""
          showBuyButton={true}
        />
      <Section>
        <h1 className="h1">Juegos destacados</h1>
        <Container>

          <CardsDestacadas/>


        </Container>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={"Últimos juegos"}
        />
      </Section>
      <Section>
        <h1>Últimas actualizaciones</h1>
        <Container>
          <div className={classes.tabsCards}>
            <Tabs
              tabNames={tabNames}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
            />
            <div className={styles.cardContainer}>
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
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={"Leer mas"}
        />
      </Section>
      <Subscription />
    </BasePage>
  );
};

export default Home;
