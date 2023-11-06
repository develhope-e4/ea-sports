import { useState } from 'react';
import { BsPlayBtn } from 'react-icons/bs';
import { MdPausePresentation } from 'react-icons/md'
import './VideoComponent.scss';
const VideoComponent = ({
  webmSrcSmallest,
  mp4SrcSmallest,
  webmSrcSmall,
  mp4SrcSmall,
  webmSrcMedium,
  mp4SrcMedium,
  webmSrc,
  mp4Src,
  webmSrcLargest,
  mp4SrcLargest,
  autoplay,
  loop,
  muted,
  videoSrc,
}) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-container">
      <div className="overlay" />
      <ea-elements-loader elements="ea-html5-video">
      </ea-elements-loader>
      <ea-html5-video slot="html5-video"
        webm-src-smallest={webmSrcSmallest}
        mp4-src-smallest={mp4SrcSmallest}
        webm-src-small={webmSrcSmall}
        mp4-src-small={mp4SrcSmall}
        webm-src-medium={webmSrcMedium}
        mp4-src-medium={mp4SrcMedium}
        webm-src={webmSrc}
        mp4-src={mp4Src}
        webm-src-largest={webmSrcLargest}
        mp4-src-largest={mp4SrcLargest}
        autoplay={isPlaying}
        loop={loop}
        muted={muted}
        unresolved
      ></ea-html5-video>
      <video src={videoSrc} autoPlay={isPlaying} loop={loop} muted={muted} playsInline />
      <div className="controls">
        {isPlaying ? (
          <button className="play-pause-button" onClick={togglePlay}>
            <MdPausePresentation /> 
          </button>
        ) : (
          <button className="play-pause-button" onClick={togglePlay}>
            <BsPlayBtn /> 
          </button>
        )}
        <img
          src="/public/VideoComponentImg/ea-hero-md-bg-mashup-trailer-pegi-16-7x2-xl.png.adapt.crop5x2.1455w.png"
          alt="Imagen de fondo"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default VideoComponent;
