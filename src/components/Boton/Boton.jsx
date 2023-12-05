import classes from "./Boton.module.scss";
/**
 *
 
@param {string} texto - Texto que va a llevar el boton
@param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
@param {Boolean} isLight - Boolean para indicar si el boton es Dark o Light
@param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
*
@returns Botón dorado si es secundario y botón blanco con borde negro si es primario
*/
const Boton = ({ texto, esPrimario, isLight, onClick, url }) => {
  const className = esPrimario ? classes.primary : isLight ? classes.secundarioLight : classes.secundarioDark;

  const handleButtonClick = () => {
    if (url) {
      window.location.href = url;
    }
    if (onClick) {
      onClick();
    }
  };

  

  return (
    <button className={className} onClick={handleButtonClick}>
      {texto}
    </button>
  );
};

export default Boton;
