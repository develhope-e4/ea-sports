import Boton from "../Boton/Boton";
import { useRef, useState } from "react";
import { MdPausePresentation } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import "./LoopVideo.scss";

const LoopVideo = ({
  videoSrc,
  imagenSrc,
  buttonText,
  onButtonClick,
  isPrimary,
  isLight,
  customClass,
  customImageClass,
  isVideoPlaying,
  showButtons,
  showBuyButton,
}) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(isVideoPlaying);

  const handleVideoButtonClick = () => {
    setIsPlaying(!isPlaying);

    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };
  const buttonClass = isPrimary ? "primary-button" : "secondary-button";
  const overlayClass = isLight ? "light-overlay" : "dark-overlay";

  return (
    <div className="video-container">
      <div className={`overlay ${overlayClass}`} />
      {showButtons && (
        <div className="video-buttons">
          {isPlaying ? (
            <MdPausePresentation onClick={handleVideoButtonClick} />
          ) : (
            <BsPlayBtn onClick={handleVideoButtonClick} />
          )}
        </div>
      )}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <img
        src={imagenSrc}
        alt="Imagen SVG"
        className={`immortalsLogo ${customImageClass}`}
      />
      <div className="compraAhora">
        {showBuyButton && (
          <Boton
            esPrimario={isPrimary}
            isLight={isLight}
            onClick={onButtonClick}
            texto={buttonText}
            className={`${buttonClass} ${customClass}`}
          />
        )}
      </div>
    </div>
  );
};

export default LoopVideo;
