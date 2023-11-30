import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useState, useRef } from "react";
import SignInFormInput from "../SignInFormInput/SignInFormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';  
import styles from "./CreateAccountForm.module.scss";

const CreateAccountForm = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [emailRegex, setEmailRegex] = useState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const refUser = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const validateEmail = (inputEmail) => {
    const isValidEmail = emailRegex.test(inputEmail);

    if (inputEmail.trim() === "") {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
    } else if (!isValidEmail) {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
    } else {
      setErrorMessage("");
      setEmailValid(true);
    }

    return isValidEmail;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    try {
      const response = await axios.post('http://localhost/backend/auth/register.php', {
        username,
        email,
        password,
      });

      const data = response.data;

      if (data.success) {
        console.log('Registro exitoso');
        setRegistrationSuccess(true);
      } else {
        console.error('Error en el registro:', data.error);
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
      setErrorMessage("Error en la solicitud HTTP");
    }
  };

  return (
    <div className={styles.fullPage}>
      <div className={styles.container}>
      <div className={styles.imgEA}>
          <img
            alt="Descripción de la imagen"
            src="Login-Img/EALogo-New.svg"
          ></img>
        </div>
        {registrationSuccess && <Navigate to="/login" />}
        <div className={styles.signup}>
          <h2>Crea tu Cuenta EA</h2>
          {registrationSuccess && (
            <p style={{ color: "green" }}>Registro exitoso. Redirigiendo a la página de inicio de sesión...</p>
          )}
          <form className={styles.formsign} onSubmit={handleFormSubmit}>
            <SignInFormInput
              label="USERNAME"
              type="text"
              placeholder="Escribe tu username"
              id="usernameForm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              isValid="false"
              ref={refUser}
            />
            <SignInFormInput
              label="TELÉFONO O CORREO ELECTRÓNICO"
              type="text"
              placeholder="Escribe tu teléfono o correo electrónico"
              id="emailForm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isValid={emailValid}
              ref={refEmail}
            />
            {errorMessage && (
              <p style={{ color: "rgb(198, 41, 41)" }}>{errorMessage}</p>
            )}
            <div className={styles.formpassword}>
              <SignInFormInput
                label="CONTRASEÑA"
                type={showPassword ? "text" : "password"}
                placeholder="Introduce tu contraseña"
                id="passwordForm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isValid="false"
                ref={refPassword}
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
            <div className={styles.boton}>
            <button className={styles.buttonsignIn} type="submit">
              REGISTRARSE
            </button>
            </div>
          </form>
          <Link to="/login">{"¿Ya tienes cuenta?"}</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
