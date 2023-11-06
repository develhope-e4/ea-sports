import { useState } from "react";
import VideoComponent from "../../components/VideoComponent/VideoComponent";
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
      <div className="VideoContainer">
        <VideoComponent
          videoSrc="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-7x2-xl.mp4"
          webmSrcSmallest="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-16x9-sm-xs.webm"
          mp4SrcSmallest="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-16x9-sm-xs.mp4"
          webmSrcSmall="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-16x9-sm-xs.webm"
          mp4SrcSmall="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-16x9-sm-xs.mp4"
          webmSrcMedium="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-2x1-md.webm"
          mp4SrcMedium="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-2x1-md.mp4"
          webmSr="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-5x2-lg.webm"
          mp4Src="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-5x2-lg.mp4"
          webmSrcLargest="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-7x2-xl.webm"
          mp4SrcLargest="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-7x2-xl.mp4"
          autoplay={true}
          loop={true}
          muted={true}
          PauseIcon={PauseIcon} 
          PlayIcon={PlayIcon} 
        />
      </div>
      <Section>
        <h1>Juegos destacados</h1>
        <Container>
          {cardDestacadaData &&
            cardDestacadaData.map((card) => (
              <CardDestacada
                url="http://google.com"ve
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
        <Container></Container>
      </Section>
    </BasePage>
  );
};

export default LatestGame;
