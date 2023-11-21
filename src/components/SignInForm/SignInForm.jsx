import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./SignInForm.module.scss";
import SignInFormInput from "../SignInFormInput/SignInFormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignInForm = () => {
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
      return;
    }

    setErrorMessage("");
    setEmailValid(true);

    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(inputEmail);
  
    if (inputEmail.trim() === "") {
      setErrorMessage("");
      setEmailValid(true);
    } else if (!isValidEmail) {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
    } else {
      setErrorMessage("");
      setEmailValid(true);
    }
  };
  const handlePasswordKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed in password field");
      handleFormSubmit(event);
    }
  };

  useEffect(() => {}, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.fullPage}>
      <div className={styles.container}>
        <div className={styles.imgEA}>
          <img
            alt="Descripción de la imagen"
            src="Login-Img/EALogo-New.svg"
          ></img>
        </div>
        <div className={styles.signin}>
          <h2>Inicia sesión en tu Cuenta EA</h2>
          <div className={styles.separator}>
            <span className={styles.separatorText}>o</span>
          </div>
          <form className={styles.formsign} onSubmit={handleFormSubmit}>
            <SignInFormInput
             label="TELÉFONO O CORREO ELECTRÓNICO"
             type="text"
             placeholder="Escribe tu teléfono o correo electrónico"
             id="emailForm"
             value={email}
             onChange={handleEmailChange}
             isValid={emailValid}
            />
            {errorMessage && <p style={{ color: "rgb(198, 41, 41)" }}>{errorMessage}</p>}
            <div className={styles.formpassword}>
              <SignInFormInput
                label="CONTRASEÑA"
                type={showPassword ? "text" : "password"}
                placeholder="Introduce tu contraseña"
                id="passwordForm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isValid="false"
                onKeyDown={handlePasswordKeyDown}
              />
              <div
                className={styles.passwordtoggle}
                onClick={() => setShowPassword(!showPassword)}
              >
                <div className={styles.iconContainer}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
          </form>
          <div className={styles.remembercheck}>
            <input type="checkbox" id="remember-me" />
            <label className={styles.labelremember} htmlFor="remember-me">
              Recordarme
            </label>
          </div>
          <button className={styles.buttonsignIn} type="submit" onClick={handleFormSubmit}>
            INICIAR SESIÓN
          </button>
          <div className={styles.formlinks}>
            <p>
              <Link to="/reset-password">
                {" "}
                {"¿Has olvidado la contraseña? "}
              </Link>
            </p>
          </div>
          <button className={styles.buttonCrear} type="crearcuenta">
            <Link to="/create-account"> {" CREAR CUENTA "}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
