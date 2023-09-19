import "./LoopVideo.scss"

const LoopVideo = ({videoSrc , imagenSrc}) => {
  return (
    <div className=".video-container">
      <video autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <img src={imagenSrc} alt="Imagen SVG" className="immortalsLogo" />
    </div>
  );
}

export default LoopVideo;
