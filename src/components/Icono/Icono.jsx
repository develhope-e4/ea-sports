import "./Icono.scss";
import classNames from "classnames";

/**
 *
 * @param {string} esRedSocial - Propiedad para saber si el icono es red social o no
 * @param {JSX.Element} icono - Icono de la libreria react-icons (https://react-icons.github.io/react-icons)
 *
 * @returns Estructura HTML
 */

const Icono = ({ esRedSocial, icono, onClick, givenClassName }) => {
  const className = classNames(esRedSocial ? "redSocial" : "otro",givenClassName);

  return (
    <div onClick={onClick} className={className}>
      {icono}
    </div>
  );
};

export default Icono;
