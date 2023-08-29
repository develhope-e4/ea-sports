import "./Boton.scss";
/**
 *
 
@param {string} texto - Texto que va a llevar el boton
@param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
@param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
*
@returns Botón dorado si es secundario y botón blanco con borde negro si es primario
*/
const Boton = ({ texto, esPrimario, onClick }) => {

    const className = esPrimario ? "primary" : "secundary";

    return (
        <button className={className} onClick={onClick}>
          {texto}
        </button>
      );
};

export default Boton;