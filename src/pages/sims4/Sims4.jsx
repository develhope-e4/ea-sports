import { useEffect, useState } from "react";
import BasePage from "../../components/BasePage/BasePage";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import Tabs from "../../components/Tabs/Tabs";
import CardHorTextDer from "../../components/CardHorTextDer/CardHorTextDer";
import CardHorTextIzq from "../../components/CardHorTextIzq/CardHorTextIzq";
import { cardHorTextDerData } from "../../data/CardHorTextDerData.mock";
import { cardHorTextIzqData } from "../../data/CardHorTextIzqData.mock";
import Boton from "../../components/Boton/Boton";
import Footer from "../../components/Footer/Footer";
import NavbarSims4 from "../../components/NavBarSims4/NavBarSims4";

const Sims4 = () => {
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
      <NavbarSims4 />
      <Section>
        <Container>
          {cardHorTextIzqData.map((cardHorTextIzqData) => (
            <CardHorTextIzq
              key={cardHorTextIzqData.titulo}
              modo={cardHorTextIzqData.modo}
              queEs={cardHorTextIzqData.queEs}
              titulo={cardHorTextIzqData.titulo}
              descripcion={cardHorTextIzqData.descripcion}
              imagenSrc={cardHorTextIzqData.imagenSRC}
            />
          ))}
        </Container>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => URL.revoke()}
          texto={"Texto aquí"}
        />
      </Section>
      <Section>
        <Container>
          <div className="tabs-cards">
            <Tabs
              tabNames={tabNames}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
            />
            <div className="card-container">
              {cardHorTextDerData ? (
                cardHorTextDerData.map((cardHorTextDerData, index) => (
                  <CardHorTextDer
                    key={`${index}-${cardHorTextDerData.titulo}`}
                    modo={cardHorTextDerData.modo}
                    queEs={cardHorTextDerData.queEs}
                    titulo={cardHorTextDerData.titulo}
                    descripcion={cardHorTextDerData.descripcion}
                    imagenSrc={cardHorTextDerData.imagenSRC}
                  />
                ))
              ) : (
                <p>No hay datos disponibles para esta pestaña.</p>
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
      <Footer />
    </BasePage>
  );
};

export default Sims4;
