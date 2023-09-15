import "./Loop.scss"

const LoopVideo = () => {
  return (
    <div className=".video-container">
      <video autoPlay loop muted playsInline>
        <source src='./immortals.mp4' type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <img src="./Immorlas-Logo.svg" alt="Imagen SVG" className="immortalsLogo" />
    </div>
  );
}

export default LoopVideo;
