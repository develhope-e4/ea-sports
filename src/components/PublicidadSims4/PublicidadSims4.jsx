import styles from "./PublicidadSims4.module.scss";
import { useState } from "react";

const Message = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  const cerrarMensaje = () => {
    setMostrarMensaje(false);
  };

  return (
    mostrarMensaje && (
      <div className={styles.mensajeContenedor}>
        <div className={styles.mensaje}>
          <a
            href="https://www.ea.com/es/games/the-sims/the-sims-4/store/addons/the-sims-4-for-rent"
            className={styles.colorAzul}
          >
            ¡Los Sims™ 4 Se Alquila Pack de Expansión ya se puede reservar!            
          </a>
          <svg
              viewBox="-2 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              width="16px"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.46 3.44a1.625 1.625 0 0 1 2.223 0l7.857 7.5a1.452 1.452 0 0 1 0 2.12l-7.857 7.5a1.625 1.625 0 0 1-2.223 0 1.452 1.452 0 0 1 0-2.12L13.206 12 6.46 5.56a1.452 1.452 0 0 1 0-2.12Z"
                fill="currentColor"
              ></path>
            </svg>
          <div className={styles.barraMensaje}></div>
          <button className={styles.cerrar} onClick={cerrarMensaje}>
            X
          </button>
        </div>
      </div>
    )
  );
};

export default Message;