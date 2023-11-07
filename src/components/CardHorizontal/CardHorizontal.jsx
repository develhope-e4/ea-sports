import classNames from "classnames/bind";
import Boton from "../Boton/Boton";
import styles from "./CardHorizontal.module.scss";

const cx = classNames.bind(styles);
const CardHorizontal = ({
  modo,
  queEs,
  titulo,
  descripcion,
  imagenSRC,
  conBorde,
  isReverse,
  textoBoton
}) => {

  const classNames = cx({
    container: true,
    isReverse: isReverse,
  });
  return (
    <div className={classNames}>
      <div className={styles.contenido}>
        <p className={styles.modo}>
          {modo}
          {conBorde}
        </p>
        <p>{queEs}</p>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => URL.revoke()}
          texto={textoBoton}
        />
      </div>
      <div>
        <img src={imagenSRC} alt="Imagen" className={styles.image} />
      </div>
    </div>
  );
};

export default CardHorizontal;
