import "./CardHorTextDer.scss";
import { cardHorTextDerData } from "../../data/CardHorTextDerData.mock";
import Boton from "../Boton/Boton";

const CardHorTextDer = ({ modo, queEs, titulo, descripcion, imagenSRC, conBorde, textoBoton }) => {
  return (
    <div className="cardHorTextDer">
      <div >
        <img src={imagenSRC} alt="Imagen" className="imgcardHorTextDer"/>
      </div>
      <div className="contenidoCardHorTextDer" >
        <p className="modo" style={{ border: conBorde ? "1px solid black" : "none" }}>{modo}</p>
        <p className="queEs">{queEs}</p>
        <h2 className="titulo">{titulo}</h2>
        <p className="texto">{descripcion}</p>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => URL.revoke()}
          texto={textoBoton}
          style={{ color: "black" }} 
        />
      </div>
    </div>
  );
};

export default CardHorTextDer;
