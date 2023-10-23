import Boton from "../Boton/Boton";
import classes from "./LoopVideo.module.scss";

const LoopVideo = ({videoSrc , imagenSrc}) => {
  return (
    <div className={classes.videoContainer}>
      <div className={classes.overlay} />
      <video src="./immortals.mp4" autoPlay loop muted playsInline />
      <img
        src="./Immorlas-Logo.svg"
        alt="Imagen SVG"
        className={classes.immortalsLogo}
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
