import classes from "./TextInfo.module.scss";

function TextInfo({ h3Text, pText, h4Text , ulLiAText , ulLiAText2 }) {
  return (
    <div className={classes.TextInfo}>
      {h3Text && <h3>{h3Text}</h3>}
      {pText && <p>{pText}</p>}
      {h4Text && <h4>{h4Text}</h4>}
      {ulLiAText && (
        <ul>
          <li><a>{ulLiAText}</a></li>
          <li><a>{ulLiAText2}</a></li>
        </ul>
      )}
    </div>
  );
}

export default TextInfo;
