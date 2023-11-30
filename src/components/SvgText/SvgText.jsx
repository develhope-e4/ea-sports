import classes from './SvgText.module.scss';

const SvgText = ({ svgSrc, text, url  }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={classes.imageWithText}>
    <img src={svgSrc} alt="SVG" />
    <p>{text}</p>
  </a>
  );
};

export default SvgText;
