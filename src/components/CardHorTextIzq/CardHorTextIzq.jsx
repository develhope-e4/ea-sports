import Boton from "../Boton/Boton";
import "./CardHorTextIzq.scss";

const CardHorTextIzq = ({ modo, queEs, titulo, descripcion, imagenSRC, conBorde, textoBoton}) => {
  return (
    <div className="cardHorTextIzq">
      <div className="contenidoCardHorTextIzq" >
          <p className="modo" style={{ border: conBorde ? "1px solid black" : "none" }}>{modo}</p>
          <p className="queEs">{queEs}</p>
          <h2 className="titulo">{titulo}</h2>
          <p className="texto">{descripcion}</p>
          <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => URL.revoke()}
          texto={textoBoton}
        />
      </div>
      <div className="imgcardHorTextIzq">
        <img src={imagenSRC} alt="Imagen" />
      </div>
    </div>
  );
};

export default CardHorTextIzq;
