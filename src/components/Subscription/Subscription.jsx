import Boton from "../Boton/Boton";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import classes from "./Subscription.module.scss";
import Container from "../Container/Container";
import Section from "../Section/Section";
import bgImage from "../../assets/Imagenes/Subscription/hero-medium-console-medio.jpg";

const Subscription = () => {
  return (
    <>
      <Section imageUrl={bgImage} margen={false}>
        <Container paddingLG={true}>
          <div className={classes.textContainer}>
            <IconoEaPlay />
            <h6 className={classes.texto}>
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
      <Section backgroundColor={"--color-sin-variable"} margen={false} >
        <Container subscription={true}>
          <h2 className={classes.tittle}>Herramientas parentales y de juego: el control en tus manos</h2>
          <div className={classes.SubscriptionSectionMoreInfoContenidoBoton}>
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
