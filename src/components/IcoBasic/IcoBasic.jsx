import "./IcoBasic.scss"

function IcoBasic({ imagenSrc, texto }) {
    return (
      <div className="IcoBasic">
        <img src={imagenSrc} alt="Imagen" />
        <h3>{texto}</h3>
      </div>
    );
  }
  
  export default IcoBasic;