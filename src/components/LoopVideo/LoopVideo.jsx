import Boton from "../Boton/Boton";
import { useRef, useState } from "react";
import { MdPausePresentation } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import classes from "./LoopVideo.module.scss";

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
  const buttonClass = isPrimary ? classes.primaryButton : classes.secondaryButton;
  const overlayClass = isLight ? classes.lightOverlay : classes.darkOverlay;

  return (
    <div className={classes.videoContainer}>
      <div className={`${classes.overlay} ${overlayClass}`} />
      {showButtons && (
        <div className={classes.videoButtons}>
          {isPlaying ? (
            <MdPausePresentation onClick={handleVideoButtonClick} />
          ) : (
            <BsPlayBtn onClick={handleVideoButtonClick} />
            )}
        </div>
      )}

      <img
      src={imagenSrc}
      alt="Imagen SVG"
      className={`${classes.immortalsLogo} ${customImageClass}`}
    />

      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={"compraAhora"}>
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
