import "./BgVideo.module.scss";
import videoFile from "../../assets/Originals Page/orignalsPageVideoXL.mp4";

const BgVideo = ({
  videoSrc = videoFile,
  alt,
  className = "originalsVideoContainer",
}) => {
  return (
    <div className={className}>
      <video autoPlay muted playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default BgVideo;
