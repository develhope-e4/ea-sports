import BasePageSims4 from "../../components/BasePageSims4/BasePageSims4";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import { cardHorizontalData } from "../../data/cardHorizontalData.mock";
import NavBarSims4 from "../../components/NavBarSims4/NavBarSims4";
import NavBarSims4Dos from "../../components/NavBarSims4Dos/NavBarSims4Dos";
import FooterSims4 from "../../components/FooterSims4/FooterSims4";
import Message from "../../components/PublicidadSims4/PublicidadSims4";

const Sims4 = () => {
  return (
    <BasePageSims4>
      <NavBarSims4 />
      <NavBarSims4Dos />
      <Message />
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
      <FooterSims4 />
    </BasePageSims4>
  );
};

export default Sims4;
