import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import SignInFormInput from "../SignInFormInput/SignInFormInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';  
import styles from "./CreateAccountForm.module.scss";

const CreateAccountForm = () => {
  const refUser = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [emailRegex, setEmailRegex] = useState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const validateEmail = (email) => {
    if (email.trim() === "") {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
      return false;
    }

    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setErrorMessage("Dirección de correo electrónico no válida");
      setEmailValid(false);
      return false;
    }

    setErrorMessage("");
    setEmailValid(true);
    return true;
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
      console.log('Response:', response);
    
      const data = response.data;

      if (data.success) {
        console.log('Registro exitoso');
        // Puedes redirigir al usuario a otra página o realizar otras acciones después del registro exitoso.
      } else {
        console.error('Error en el registro:', data.error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario.
      }
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
      // Manejar errores de red u otros problemas.
    }
    

  };

  const handleUserChange = (event) => {
    const inputUsername = event.target.value;
    setUsername(inputUsername);
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

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

  return (
    <div className={styles.fullPage}>
      <div className={styles.container}>
        <div className={styles.signup}>
          <h2>Crea tu Cuenta EA</h2>
          <form className={styles.formsign} onSubmit={handleFormSubmit}>
            <SignInFormInput
              label="USERNAME"
              type="text"
              placeholder="Escribe tu username"
              id="usernameForm"
              value={username}
              onChange={handleUserChange}
              isValid="false"
              ref={refUser}
            />
            <SignInFormInput
              label="TELÉFONO O CORREO ELECTRÓNICO"
              type="text"
              placeholder="Escribe tu teléfono o correo electrónico"
              id="emailForm"
              value={email}
              onChange={handleEmailChange}
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
                onKeyDown={handlePasswordKeyDown}
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
            <button className={styles.buttonsignIn} type="submit">
              REGISTRARSE
            </button>
          </form>
          
          <Link to="/login">{"¿Ya tienes cuenta?"}</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
