import { useState } from "react";
import LoopVideo from "../../components/LoopVideo/LoopVideo";
import CardDestacada from "../../components/CardDestacada/CardDestacada";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";
import Boton from "../../components/Boton/Boton";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const LatestGame = () => {
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
        <h1>Juegos destacados</h1>
        <Container>
          {cardDestacadaData &&
            cardDestacadaData.map((card) => (
              <CardDestacada
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                showText={true}
              />
            ))}
        </Container>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={"Ver todos los juegos"}
        />
      </Section>
      <Section>
        <Container>
        
        </Container>
      
      </Section>
    
      
    </BasePage>
  );
};

export default LatestGame;
