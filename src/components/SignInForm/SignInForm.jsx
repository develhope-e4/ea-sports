import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SignInForm.scss";
import SignInFormInput from "../SignInFormInput/SignInFormInput";

const SignInForm = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario o realizar acciones
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {
    // Aquí puedes agregar lógica asíncrona si es necesario
    // try {
    //   // Operaciones asíncronas
    // } catch (error) {
    //   setError(error.message);
    // }
  }, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="full-page">
      <div className="signin">
        <h2>Inicio Sesión en tu Cuenta EA</h2>
        <form className="form-sign" onSubmit={handleFormSubmit}>
          <SignInFormInput
            label="TELÉFONO O CORREO ELECTRÓNICO"
            type="text"
            placeholder="Escribe tu teléfono o correo electrónico"
            id="emailForm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SignInFormInput
            label="CONTRASEÑA"
            type="password"
            placeholder="Introduce tu contraseña"
            id="passwordForm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="remember-check" >
          <input type="checkbox" id="remember-me" />
          <label className="label-remember" htmlFor="remember-me">Recordarme</label>
        </div>
          <button className="button-signIn" type="submit">INICIAR SESIÓN</button>
        <div className="form-links">
         
           
            <Link to="/reset-password">  {"¿Has olvidado la contraseña? "}</Link>
        
          </div>
          <button className="button-Crear" type="crearcuenta">
            <Link to="/create-account"> {" CREAR CUENTA "}</Link>
          </button>
       
      </div>
    </div>
  );
};

export default SignInForm;