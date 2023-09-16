import "./CardDestacada.scss";
/**
 *
 
@param {string} texto - Texto que va a llevar el boton
@param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
@param {Boolean} isLight - Boolean para indicar si el boton es Dark o Light
@param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
*
@returns Botón dorado si es secundario y botón blanco con borde negro si es primario
*/

const CardDestacada = ({ backgroundImage, gameLogo }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href="https://www.ea.com/es-es" className="linkCardDestacada">
      <div className="backgroundImage" style={cardStyle}>
        <div className="cardDestacada">
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className="logoCardDestacada"
          />
          <p className="textCardDestacada">Sitio oficial</p>
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
