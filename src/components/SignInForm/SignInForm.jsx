import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SignInForm.module.scss";
import SignInFormInput from "../SignInFormInput/SignInFormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {

  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.fullPage}>
      <div className={styles.imgEA}>
        <img alt="Descripción de la imagen" src="Login-Img/EALogo-New.svg" ></img>
      </div>
      <div className={styles.signin}>
        <h2>Inicia sesión en tu Cuenta EA</h2>
        <form className={styles.formsign} onSubmit={handleFormSubmit}>
          <SignInFormInput
            label="TELÉFONO O CORREO ELECTRÓNICO"
            type="text"
            placeholder="Escribe tu teléfono o correo electrónico"
            id="emailForm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.passwordinputcontainer}>
            <SignInFormInput
              label="CONTRASEÑA"
              type={showPassword ? "text" : "password"}
              placeholder="Introduce tu contraseña"
              id="passwordForm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={styles.passwordtoggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?  <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </form>
        <div className={styles.remembercheck} >
          <input type="checkbox" id="remember-me" />
          <label className={styles.labelremember} htmlFor="remember-me">Recordarme</label>
        </div>
          <button className={styles.buttonsignIn} type="submit">INICIAR SESIÓN</button>
        <div className={styles.formlinks}>
          <p>
           
            <Link to="/reset-password">  {"¿Has olvidado la contraseña? "}</Link>
          </p>
          </div>
          <button className={styles.buttonCrear} type="crearcuenta">
            <Link to="/create-account"> {" CREAR CUENTA "}</Link>
          </button>
       
      </div>
    </div>
  );
};

export default SignInForm;