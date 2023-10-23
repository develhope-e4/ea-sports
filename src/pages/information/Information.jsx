import "./Information.scss";
import BannerParentingTools from "../../components/BannerParentingTools/BannerParentingTools";
import TextInfo from "../../components/TextInfo/TextInfo";
import IcoBasic from "../../components/IcoBasic/IcoBasic";
import { IcoBasicData } from "../../data/IcoBasicComponent";
import { MarkBasicData } from "../../data/MarkBasicComponent";
import Container from "../../components/Container/Container";

const Information = () => {
  return (
    <div>
      <BannerParentingTools />
      <Container>
        <div className="Space">
          <div>
            <TextInfo
              h3Text="Las experiencias de juego positivo y el control del juego van de la mano."
              h4Text="Hay distintas formas de gestionar tu experiencia y la de tu familia al jugar a juegos online."
            />
          </div>
          <div className="grid-container">
            {IcoBasicData.map((elemento, index) => (
              <IcoBasic
                key={index}
                imagenSrc={elemento.imagenSrc}
                texto={elemento.texto}
              />
            ))}
          </div>
        </div>
        <div>
          <TextInfo
            h3Text="Comprender las herramientas de plataforma y cuenta"
            pText="Las principales plataformas de juego tienen controles de juego y familia o parentales que facilitan la gestión de las cuentas familiares. Al utilizar los servicios online de EA, puedes jugar, chatear y, en algunos casos, compartir contenido con tus amistades y otras personas que jueguen. El primer paso para garantizar que tu familia y tú tenéis una experiencia positiva y segura al jugar es comprender las herramientas que tenéis disponibles en vuestras plataformas de juego"
            h4Text={<strong>Enlaces útiles para gestionar el juego:"</strong>}
            ulLiAText="Obtén más información sobre las cuentas infantiles y de adolescentes y sus ajustes por defecto"
            ulLiAText2="Cómo puedes ayudar a proteger tu Cuenta EA y la de tu familia."
          />
        </div>
        <div>
          <TextInfo
            h4Text={<strong>Elige la guía de tu(s) plataforma(s) aquí:</strong>}
          />
        </div>
        <div className="grid-container2">
          {MarkBasicData.map((elemento, index) => (
            <IcoBasic
              key={index}
              imagenSrc={elemento.imagenSrc}
              texto={elemento.texto}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Information;
