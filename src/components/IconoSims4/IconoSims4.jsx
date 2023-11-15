import styles from "./IconoSims4.module.scss";
import classNames from "classnames";

/**
 * @param {boolean} esRedSocial - Propiedad para saber si el icono es red social o no
 * @param {JSX.Element} icono - Icono de la libreria react-icons (https://react-icons.github.io/react-icons)
 * @param {Function} onClick - Función de clic para el icono
 * @param {string} givenClassName - Clases CSS adicionales proporcionadas externamente
 * @returns {JSX.Element} - Estructura HTML
 */
const IconoSims4 = ({ esRedSocial, icono, onClick, givenClassName }) => {
  const className = classNames(styles.icono, {
    [styles.redSocial]: esRedSocial,
    [styles.otro]: !esRedSocial,
  }, givenClassName);

  return (
    <div onClick={onClick} className={className}>
      {icono}
    </div>
  );
};

export default IconoSims4;
