import "./Information.scss";
import BannerParentingTools from "../../components/BannerParentingTools/BannerParentingTools";
import TextInfo from "../../components/TextInfo/TextInfo";
import IcoBasic from "../../components/IcoBasic/IcoBasic";
import { IcoBasicData } from "../../data/IcoBasicComponent";
import { MarkBasicData } from "../../data/MarkBasicComponent";
import Container from "../../components/Container/Container";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import { HorizontalCardData } from "../../data/HorizontalCardData";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { VerticalCardData } from "../../data/VerticalCardData";
import Cards from "../../components/Cards/Cards";
import { CardInfoData } from "../../data/CardInfoData";
import Boton from "../../components/Boton/Boton";
import Section from "../../components/Section/Section";

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
            h4Text={<strong>Enlaces útiles para gestionar el juego:</strong>}
            ulLiAText="Obtén más información sobre las cuentas infantiles y de adolescentes y sus ajustes por defecto"
            ulLiAText2="Cómo puedes ayudar a proteger tu Cuenta EA y la de tu familia."
          />
        </div>
        <div>
          <TextInfo
            h4Text={<strong>Elige la guía de tu(s) plataforma(s) aquí:</strong>}
          />
        </div>
        <div className="containerGrid-2-3">
          <div className="grid-container2">
            {MarkBasicData.slice(0, 6).map((elemento, index) => (
              <IcoBasic
                key={index}
                imagenSrc={elemento.imagenSrc}
                texto={elemento.texto}
              />
            ))}
          </div>
          <div className="grid-container3">
            {MarkBasicData.slice(6, 8).map((elemento, index) => (
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
            h3Text="Comprender los controles en el juego disponibles en los títulos de EA"
            pText="En Electronic Arts, queremos que quienes juegan a nuestros títulos, al igual que sus padres y madres, tengan toda la información que necesitan para tomar decisiones relacionadas con los juegos. Tiempo de juego de FIFA se ha diseñado para ayudar a quienes juegan a FIFA a entender y controlar cómo juegan. Puedes usarlo para tener una visión general de cuánto tiempo pasas jugando, los sobres de FUT que has abierto y los FIFA Points que has comprado, además de establecer límites para controlar cuánto juegas."
          />
        </div>
        <div>
          <HorizontalCard
            imagenSrc={"./Info/IcoParent/FIFA-Mbappe.jpg"}
            aText={
              <strong>Más información sobre Tiempo de juego de FIFA</strong>
            }
          />
        </div>
        <div className="Space">
          <div>
            <TextInfo
              h3Text="Sistemas de clasificación de videojuegos"
              pText="Los padres y tutores quieren conocer los títulos a los que juegan sus hijos y sentirse cómodos con ellos."
            />
            <TextInfo pText="Los videojuegos tienen sistemas de clasificación diseñados para ayudar a los jugadores y a los padres o tutores a tomar decisiones ponderadas sobre los juegos que eligen para sí mismos o para sus hijos. Todos los títulos de EA están marcados con una clasificación que indica la pertinencia de edad del contenido. Los sistemas de clasificación también asignan descriptores que proporcionan información sobre características, como compras en el juego. Las clasificaciones y los descriptores de contenido varían según la región del mundo." />
          </div>
          <HorizontalCard
            imagenSrc={"./Info/IcoParent/PEGI.jpg"}
            h4Text={<strong>PEGI</strong>}
            pText={
              "El mecanismo de autorregulación Pan European Game Information (PEGI) se basa en cinco categorías de edad y ocho descriptores de contenido. Las categorías de edad indican si un producto de software interactivo es apropiado para infantes de determinada edad. "
            }
          />
        </div>
        <div>
          <TextInfo h3Text="Juegos de Electronic Arts y clasificaciones" />
        </div>
        <div className="grid-container-3-1fr" style={{ gap: "20px"}}>
          {VerticalCardData.map((elemento, index) => (
            <VerticalCard
              key={index}
              imagenSrc={elemento.imagenSrc}
              h4Text={elemento.h4Text}
              pText={elemento.pText}
              aText={elemento.aText}
              isReverse={elemento.isReverse}
            />
          ))}
        </div>
        <div>
          <TextInfo h3Text="Protégete en la red" />
        </div>
        <div>
          {HorizontalCardData.map((elemento, index) => (
            <HorizontalCard
              key={index}
              imagenSrc={elemento.imagenSrc}
              h4Text={elemento.h4Text}
              pText={elemento.pText}
              isReverse={elemento.isReverse}
            />
          ))}
        </div>
        <div>
          <TextInfo h3Text="Tenemos un compromiso con el juego positivo" />
        </div>
        <Section>
        <div style={{ display: "flex", gap: "30px" }}>
          {CardInfoData.map((elemento, index) => (
            <Cards
              key={index}
              imagenSrc={elemento.imagenSrc}
              nombre={elemento.nombre}
              fecha={elemento.fecha}
              titulo={elemento.titulo}
              texto={elemento.texto}
            />
          ))}
        </div>
        <div>
          <Boton
            esPrimario={false}
            isLight={false}
            onClick={() => console.log("click en el boton negro")}
            texto={"Seguir leyendo"}
          />
        </div>
        </Section>
      </Container>
    </div>
  );
};

export default Information;
