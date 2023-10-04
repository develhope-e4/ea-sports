import React from 'react';
import './SvgText.scss';

const SvgText = ({ svgSrc, text, url  }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="image-with-text">
    <img src={svgSrc} alt="SVG" />
    <p>{text}</p>
  </a>
  );
};

export default SvgText;
