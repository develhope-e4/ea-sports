import BasePageSims4 from "../../components/BasePageSims4/BasePageSims4";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardHorTextDer from "../../components/CardHorTextDer/CardHorTextDer";
import CardHorTextIzq from "../../components/CardHorTextIzq/CardHorTextIzq";
import { cardHorTextDerData } from "../../data/CardHorTextDerData.mock";
import { cardHorTextIzqData } from "../../data/CardHorTextIzqData.mock";
import Footer from "../../components/Footer/Footer";
import NavbarSims4 from "../../components/NavBarSims4/NavBarSims4";
import NavbarSims4Dos from "../../components/NavBarSims4Dos/NavBarSims4Dos";

const Sims4 = () => {
  return (
    <BasePageSims4>
      <NavbarSims4 />
      <NavbarSims4Dos />
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
              conBorde={cardHorTextIzqData.conBorde}
            />
          ))}
        </Container>
      </Section>
      <Section>
        <Container>
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
        </Container>
      </Section>
      <Footer />
    </BasePageSims4>
  );
};

export default Sims4;
