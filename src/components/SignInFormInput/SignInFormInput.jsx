const SignInFormInput = ({ label, type, placeholder, id }) => (
  
    <>
      <p className="form-label">{label}</p>
      <input className="form-input" type={type} placeholder={placeholder} id={id} />
    </>
  );

  export default SignInFormInput; 