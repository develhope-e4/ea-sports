import Boton from '../Boton/Boton'; 
import "./LoopVideo.scss"

const LoopVideo = ({ videoSrc, imagenSrc, buttonText, onButtonClick, isPrimary, isLight, customClass, customImageClass }) => {
  const buttonClass = isPrimary ? "primary-button" : "secondary-button";
  const overlayClass = isLight ? "light-overlay" : "dark-overlay";

  return (
    <div className="video-container">
      <div className={`overlay ${overlayClass}`} />
      <video src={videoSrc} autoPlay loop muted playsInline />
      <img
        src={imagenSrc}
        alt="Imagen SVG"
        className={`immortalsLogo ${customImageClass}`} 
      />
      <div className="compraAhora">
        <Boton
          esPrimario={isPrimary}
          isLight={isLight}
          onClick={onButtonClick}
          texto={buttonText}
          className={`${buttonClass} ${customClass}`} 
        />
      </div>
    </div>
  );
}

export default LoopVideo;
