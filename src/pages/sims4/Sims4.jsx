import BasePageSims4 from "../../components/BasePageSims4/BasePageSims4";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import { cardHorizontalData } from "../../data/cardHorizontalData.mock";
import NavBarSims4 from "../../components/NavBarSims4/NavBarSims4";
import FooterSims4 from "../../components/FooterSims4/FooterSims4";
import Message from "../../components/PublicidadSims4/PublicidadSims4";

const Sims4 = () => {
  return (
    <BasePageSims4>
      <NavBarSims4 />
      <Section>
        <Message />
        <Container>
          {cardHorTextIzqData.map((cardHorTextIzqData) => (
            <CardHorTextIzq
              key={cardHorTextIzqData.titulo}
              modo={cardHorTextIzqData.modo}
              queEs={cardHorTextIzqData.queEs}
              titulo={cardHorTextIzqData.titulo}
              descripcion={cardHorTextIzqData.descripcion}
              imagenSrc={cardHorTextIzqData.imagenSRC}
              conBorde={ cardHorTextIzqData.conBorde }
              textoBoton={cardHorTextIzqData.textoBoton}
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
    </BasePageSims4>
  );
};

export default Sims4;
