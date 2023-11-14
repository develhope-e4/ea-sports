import styles from "./publicidadSims4.module.scss";
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
          <div className={styles.colorAzul}></div>
          ¡Ya puedes reservar Los Sims™ 4 Se Alquila Pack de Expansión!
          <div className={styles.flecha}>{">"}</div>
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
