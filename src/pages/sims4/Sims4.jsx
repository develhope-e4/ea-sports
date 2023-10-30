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

const Sims4 = () => {
  return (
    <BasePage>
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
              {cardHorTextDerData[activeTab] ? (
                cardHorTextDerData[activeTab].map((card, index) => (
                  <CardHorTextDer
                    key={`${index}-${card.titulo}`}
                    modo={card.modo}
                    queEs={card.queEs}
                    titulo={card.titulo}
                    descripcion={card.descripcion}
                    imagenSrc={card.imagenSRC}
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
