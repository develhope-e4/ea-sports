import { useEffect, useState } from 'react';
import "./VolverArribaBoton.scss";

function VolverArribaBoton() {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra el botón cuando el usuario ha desplazado cierta cantidad
  const toggleVisibility = () => {
    setIsVisible(true);    
  };

  // Agrega un listener de desplazamiento para mostrar u ocultar el botón
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Desplaza la página al principio cuando se hace clic en el botón
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Desplazamiento suave
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="volverArribaBoton" onClick={scrollToTop}>
          Volver arriba
        </button>
      )}
    </div>
  );
}

export default VolverArribaBoton;
