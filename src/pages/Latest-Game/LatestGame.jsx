import { useState } from "react";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
import { MdPausePresentation } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import Boton from "../../components/Boton/Boton";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import "../../components/VideoComponent/VideoComponent.module.scss";
import { CardsDestacadas } from "../../components/CardsDestacadas/CardsDestacadas";

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
      <Section>
        <Container>

          
        </Container>
      </Section>
        
      
      <Section>
        <h1>Juegos destacados</h1>
        <Container>
          <CardsDestacadas />
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
