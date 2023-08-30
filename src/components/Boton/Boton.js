import "./Boton.scss";
/**
 *
 
@param {string} texto - Texto que va a llevar el boton
@param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
@param {Boolean} isDark - Boolean para indicar si el boton es Dark o Light
@param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
*
@returns Botón dorado si es secundario y botón blanco con borde negro si es primario
*/
const Boton = ({ texto, esPrimario, isDark, onClick }) => {
  const className = esPrimario ? "primary" : isDark ? "secundario-dark" : "secundario-light";

  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Boton;
