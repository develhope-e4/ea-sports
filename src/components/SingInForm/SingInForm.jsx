import { Link } from "react-router-dom";
import "./SingInForm.scss";
import SignInFormInput from "../SignInFormInput/SignInFormInput";

const SignInForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
  };
  return (
    <div className="full-page">
    <div className="signin">
      <h2>Inicio Sesión en tu Cuenta EA</h2>
      <form className="form-sing" onSubmit={handleFormSubmit}>
        <SignInFormInput
          label="TELÉFONO O CORREO ELECTRÓNICO"
          type="text"
          placeholder="Escribe tu teléfono o correo electrónico"
        />
        <SignInFormInput
          label="CONTRASEÑA"
          type="password"
          placeholder="Introduce tu contraseña"
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        <input type="checkbox" id="remember-me" /> 
        <label htmlFor="remember-me">Remember me</label>
      </p>
      <div className="form-links">
        <p>
          {"¿Has olvidado la contraseña? "}
          <Link to="/reset-password">Reset Password</Link>
        </p>
        <p>
          Don't have an account? <Link to="/create-account">Create Account</Link>
        </p>
      </div>
    </div>
  </div>
);
};

export default SignInForm;