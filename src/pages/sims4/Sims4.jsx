import BasePageSims4 from "../../components/BasePageSims4/BasePageSims4";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import { cardHorizontalData } from "../../data/cardHorizontalData";
import NavBarSims4 from "../../components/NavBarSims4/NavBarSims4";
import NavBarSims4Dos from "../../components/NavBarSims4Dos/NavBarSims4Dos";
import FooterSims4 from "../../components/FooterSims4/FooterSims4";

const Sims4 = () => {
  return (
    <BasePageSims4>
      <NavBarSims4 />
      <NavBarSims4Dos />
      <Section>
        <Container>
          {cardHorizontalData.map((card) => (
            <CardHorizontal
              key={card.titulo}
              modo={card.modo}
              queEs={card.queEs}
              titulo={card.titulo}
              isReverse={card.isReverse}
              descripcion={card.descripcion}
              imagenSRC={card.imagenSRC}
              conBorde={card.conBorde || false}
              textoBoton={card.textoBoton}
            />
          ))}
        </Container>
      </Section>
      {/* <Section>
        <Container>
          {cardHorTextDerData ? (
            cardHorTextDerData.map((cardHorTextDerData, index) => (
              <CardHorizontal
                key={`${index}-${cardHorTextDerData.titulo}`}
                modo={cardHorTextDerData.modo}
                queEs={cardHorTextDerData.queEs}
                titulo={cardHorTextDerData.titulo}
                descripcion={cardHorTextDerData.descripcion}
                imagenSRC={cardHorTextDerData.imagenSRC}
                conBorde={cardHorTextDerData.conBorde || false}
              />
            ))
          ) : (
            <p>No hay datos disponibles para esta pestaña.</p>
          )}
        </Container>
      </Section> */}
      <FooterSims4 />
    </BasePageSims4>
  );
};

export default Sims4;
