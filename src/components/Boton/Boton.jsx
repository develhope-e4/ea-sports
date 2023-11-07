import styles from "./Boton.module.scss";

/**
 * @param {string} texto - Texto que va a llevar el botón.
 * @param {boolean} esPrimario - Booleano para indicar si el botón es primario o secundario.
 * @param {function} onClick - Función que se ejecuta cuando el usuario hace clic en el botón.
 * @returns Botón con estilos primarios o secundarios.
 */
const Boton = ({ texto, esPrimario, onClick }) => {
  const className = esPrimario ? styles.primario : styles.secundario;

  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
