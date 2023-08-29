import "./EjemploComponente.scss";

/**
 *
 * @param {string} texto - Texto que va a llevar el boton
 * @param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
 * @param {Boolean} disabled - Boolean para indicar si el boton esta desactivado
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 *
 * @returns Estructura HTML
 */

const EjemploComponente = ({ texto, esPrimario, disabled, onClick }) => {
  /**
   * Logica de la aplicacion
   */
  const className = esPrimario ? "primario" : "secundario";

  /**
   * HTML a retornar
   */
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {texto}
    </button>
  );
};

/**
 * Siempre va al final del componente, para poder importarlo en mi aplicacion
 */
export default EjemploComponente;
