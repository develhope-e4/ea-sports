import LoopVideo from "../../components/LoopVideo/LoopVideo";
import { useRef, useState } from "react";
import Boton from "../../components/Boton/Boton";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { CardsDestacadas } from "../../components/CardsDestacadas/CardsDestacadas";

const LatestGame = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(true);

  const handleVideoButtonClick = () => {
    setVideoPlaying(!isVideoPlaying);
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
        <Container></Container>
      </Section>
    </BasePage>
  );
};

export default LatestGame;
