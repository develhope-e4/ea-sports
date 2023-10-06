import Boton from "../Boton/Boton";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import "./Subscription.scss";
import Container from "../Container/Container";

const Subscription = () => {
  return (
    <div class="SubscriptionSection">
      <Container>
        <div className="text-container">
          <IconoEaPlay />
          <h6 className="texto">
            No te limites a jugar. Saca más partido a tus juegos. Desbloquea
            recompensas exclusivas, contenido para los miembros y una biblioteca
            de los mejores títulos.
          </h6>
          <Boton
            esPrimario={false}
            isLight={true}
            onClick={() => console.log("click en el boton blanco")}
            texto={"Únete ya"}
          />
        </div>
      </Container>

      <div class="SubscriptionSection-MoreInfo">
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
      </div>
    </div>
  );
};
export default Subscription;
