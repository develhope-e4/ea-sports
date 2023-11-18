const SignInFormInput = ({ label, type, placeholder }) => (
    <>
      <p className="form-label">{label}</p>
      <input className="form-input" type={type} placeholder={placeholder} />
    </>
  );

  export default SignInFormInput; 