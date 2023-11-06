import BasePageSims4 from "../../components/BasePageSims4/BasePageSims4";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardHorTextDer from "../../components/CardHorTextDer/CardHorTextDer";
import CardHorTextIzq from "../../components/CardHorTextIzq/CardHorTextIzq";
import { cardHorTextDerData } from "../../data/CardHorTextDerData.mock";
import { cardHorTextIzqData } from "../../data/CardHorTextIzqData.mock";
import NavBarSims4 from "../../components/NavBarSims4/NavBarSims4";
import NavBarSims4Dos from "../../components/NavBarSims4Dos/NavBarSims4Dos";

const Sims4 = () => {
  return (
    <BasePageSims4>
      <NavBarSims4 />
      <NavBarSims4Dos />
      <Section>
        <Container>
          {cardHorTextIzqData.map((cardHorTextIzqData) => (
            <CardHorTextIzq
              key={cardHorTextIzqData.titulo}
              modo={cardHorTextIzqData.modo}
              queEs={cardHorTextIzqData.queEs}
              titulo={cardHorTextIzqData.titulo}
              descripcion={cardHorTextIzqData.descripcion}
              imagenSRC={cardHorTextIzqData.imagenSRC}
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
                imagenSRC={cardHorTextDerData.imagenSRC}
                conBorde={cardHorTextIzqData.conBorde}
              />
            ))
          ) : (
            <p>No hay datos disponibles para esta pestaña.</p>
          )}
        </Container>
      </Section>
    </BasePageSims4>
  );
};

export default Sims4;
