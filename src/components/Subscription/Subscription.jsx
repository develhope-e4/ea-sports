import Boton from "../Boton/Boton";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import "./Subscription.scss";

const Subscription = () => {
  return (
    <div>
      <div class="SubscriptionSection">
        <div class="SubscriptionSection-contenido">
          <IconoEaPlay />
          <h6>
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

        <div class="SubscriptionSection-MoreInfo">
          <div class="SubscriptionSection-MoreInfo-contenido">
            <h2>Herramientas parentales y de juego: el control en tus manos</h2>
            <div className="SubscriptionSection-MoreInfo-contenido-boton">
              <Boton
                esPrimario={false}
                isLight={false}
                onClick={() => console.log("click en el boton negro")}
                texto={"Más información"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
