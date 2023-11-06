import Boton from "../Boton/Boton";
import "./CardHorTextIzq.scss";


const CardHorTextIzq = ({ modo, queEs, titulo, descripcion, imagenSRC, conBorde}) => {
  const textoBoton = [
    "Juega Gratis*",
    "Ver Pack de Expansión",
    "Leer más"
  ]  
  return (
    <div className="cardHorTextIzq">
      <div className="contenidoCardHorTextIzq" >
          <p className="modo">{modo}{conBorde}</p>
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
      <div >
        <img src={imagenSRC} alt="Imagen"  className="imgCardHorTextIzq" />
      </div>
    </div>
  );
};


export default CardHorTextIzq;