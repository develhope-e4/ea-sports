import classes from "./IcoBasic.module.scss"

function IcoBasic({ imagenSrc, texto }) {
    return (
      <div className={classes.IcoBasic}>
        <img src={imagenSrc} alt="Imagen" />
        <h3>{texto}</h3>
      </div>
    );
  }
  
  export default IcoBasic;