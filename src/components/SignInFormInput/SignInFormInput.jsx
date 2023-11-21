import styles from "../SignInForm/SignInForm.module.scss";
const SignInFormInput = ({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
  isValid,
  onKeyDown,
}) => (
  <div>
    <p className={styles.formlabel}>{label}</p>
    <input
      className={`${styles.forminput} ${!isValid ? styles.invalid : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </div>
);

export default SignInFormInput;
