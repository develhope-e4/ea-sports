import Boton from "../Boton/Boton";
import Icono from "../Icono/Icono";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import "./Subscription.scss";

const Subscription = () => {
  return (
    <div>
      <div class="SubscriptionSection">
        <div class="SubscriptionSection-contenido">
          <IconoEaPlay/>
          <h3>
            No te limites a jugar. Saca más partido a tus juegos. Desbloquea
            recompensas exclusivas, contenido para los miembros y una biblioteca
            de los mejores títulos.
          </h3>
          <Boton
            esPrimario={false}
            isLight={true}
            onClick={() => console.log("click en el boton blanco")}
            texto={"Únete ya"}
          />
        </div>
      </div>
      <div class="SubscriptionSection-MoreInfo">
        <h1>Herramientas parentales y de juego el control en tus manos</h1>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={"Más información"}
        />
      </div>
    </div>
  );
};
export default Subscription;
