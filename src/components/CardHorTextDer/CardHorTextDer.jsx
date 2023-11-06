import "./CardHorTextDer.scss";
import Boton from "../Boton/Boton";


const CardHorTextDer = ({ modo, queEs, titulo, descripcion, imagenSRC, conBorde }) => {
  const textoBoton = [
    "Ver Pack de Accesorios",
    "Leer más",
    "Ver Pack de Expansión"
  ]
  return (
    <div className="cardHorTextDer">
      <div >
        <img src={imagenSRC} alt="Imagen" className="imgCardHorTextDer"/>
      </div>
      <div className="contenidoCardHorTextDer" >
        <p className="modo">{modo}</p>
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