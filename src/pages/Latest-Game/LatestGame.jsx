import LoopVideo from "../../components/LoopVideo/LoopVideo";
import { useState } from "react";
import Boton from "../../components/Boton/Boton";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardDestacada from "../../components/CardDestacada/CardDestacada";
import "../../components/CardDestacada/CardDestacada.scss";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";
import TabsGames from "../../components/TabsGames/TabsGames";
import tabGamesData from "../../data/TabGamesData.mock";
import "../../components/TabsGames/TabsGames.scss";

const LatestGame = () => {

  const [isVideoPlaying, setVideoPlaying] = useState(true);

  const handleVideoButtonClick = () => {
    setVideoPlaying(!isVideoPlaying);
  };

  const [activeTab, setActiveTab] = useState("Novedades");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <BasePage>
      <LoopVideo
        videoSrc="https://media.contentapi.ea.com/content/dam/eacom/videos/2023/10/ea-games-hero-md-fy24-sizzle-reel-7x2-xl.mp4"
        imagenSrc="../../../public/VideoComponentImg/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop5x2.1455w.png"
        buttonText="Comprar ahora"
        onButtonClick={handleVideoButtonClick}
        isPrimary={true}
        isLight={true}
        customClass=""
        customImageClass="img-videogames"
        isVideoPlaying={isVideoPlaying}
        showButtons={true}
        showBuyButton={false}
      />
      <Section>
        <TabsGames
         tabs={tabGamesData} 
        onTabChange={handleTabChange}
        activeTab={activeTab} />
      </Section>
      <Section>
        <Container>
          <div className="CardsDestacadas">
            {cardDestacadaData &&
              cardDestacadaData.map((card, index) => (
                <CardDestacada
                  key={index}
                  url="http://google.com"
                  backgroundImage={card.bg}
                  gameLogo={card.logo}
                  showText={true}
                />
              ))}
          </div>
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