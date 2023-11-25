import styles from "../SignInForm/SignInForm.module.scss";
import { forwardRef } from "react";

const SignInFormInput = forwardRef(
  (
    {
      label,
      type,
      placeholder,
      id,
      value,
      onChange,
      isValid,
      onKeyDown
    },
    ref
  ) => (
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
        ref={ref}
      />
    </div>
  )
);

export default SignInFormInput;