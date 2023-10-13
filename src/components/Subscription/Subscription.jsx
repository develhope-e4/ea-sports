import Boton from "../Boton/Boton";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import "./Subscription.scss";
import Container from "../Container/Container";
import Section from "../Section/Section";
import bgImage from "../../assets/Imagenes/Subscription/hero-medium-console-medio.jpg";

const Subscription = () => {
  return (
    <>
      <Section imageUrl={bgImage}>
        <Container>
          <div className="text-container">
            <IconoEaPlay />
            <h6 className="texto">
              No te limites a jugar. Saca más partido a tus juegos. Desbloquea
              recompensas exclusivas, contenido para los miembros y una
              biblioteca de los mejores títulos.
            </h6>
            <Boton
              esPrimario={false}
              isLight={true}
              onClick={() => console.log("click en el boton blanco")}
              texto={"Únete ya"}
            />
          </div>
        </Container>
      </Section>
      <Section backgroundColor={"#6fb0d6"}>
        <Container>
          <h2>Herramientas parentales y de juego: el control en tus manos</h2>
          <div className="SubscriptionSection-MoreInfo-contenido-boton">
            <Boton
              esPrimario={false}
              isLight={false}
              onClick={() => console.log("click en el boton negro")}
              texto={"Más información"}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};
export default Subscription;