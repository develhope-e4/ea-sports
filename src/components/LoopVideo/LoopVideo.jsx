import Boton from "../Boton/Boton";
import "./LoopVideo.scss";

const LoopVideo = ({videoSrc , imagenSrc}) => {
  return (
    <div className="video-container">
      <div className="overlay" />
      <video src="./immortals.mp4" autoPlay loop muted playsInline />
      <img
        src="./Immorlas-Logo.svg"
        alt="Imagen SVG"
        className="immortalsLogo"
      />
      <div className="compraAhora">
        <Boton
          esPrimario={true}
          isLight={false}
          onClick={() => console.log("click en el boton dorado")}
          texto={"Comprar ahora"}
        />
      </div>
    </div>
  );
}

export default LoopVideo;
