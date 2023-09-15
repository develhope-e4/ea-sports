import "./Icono.scss";

/**
 *
 * @param {string} texto - Texto que va a llevar el boton
 * @param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
 * @param {Boolean} disabled - Boolean para indicar si el boton esta desactivado
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 *
 * @returns Estructura HTML
 */

const Icono = ({
  xmlns = "",
  width = "",
  height = "",
  viewBox = "",
  version = " ",
  id = " ",
  style = " ",
  d = " ",
}) => {
  return (
    <svg
      xmlns={xmlns}
      width={width}
      height={height}
      viewBox={viewBox}
      version={version}
    >
      <g id={id}>
        <path d={d} />
      </g>
    </svg>
  );
};

export default Icono;
