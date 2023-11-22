import classNames from "classnames/bind";
import BotonSims4 from "../BotonSims4/BotonSims4";
import styles from "./CardHorizontal.module.scss";
import { cardHorizontalData } from "../../data/cardHorizontalData.mock";

const cx = classNames.bind(styles);
export const CardHorizontal = ({
  modo,
  queEs,
  titulo,
  descripcion,
  imagenSRC,
  conBorde,
  isReverse,
  textoBoton,
}) => {
  const classNames = cx({
    container: true,
    isReverse: isReverse,
  });

  // Solo declara conBorde una vez y usa una estructura condicional
  const conBordeClass = conBorde ? styles.conBorde : null;

  return (
    <div className={classNames}>
      <div className={styles.contenido}>
        <p className={conBordeClass}>{modo}</p>
        <p className={styles.queEs}>{queEs}</p>
        <div className={styles.tituloDescripcion}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
        </div>
        <BotonSims4
          esPrimario={cardHorizontalData.esPrimario}
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
