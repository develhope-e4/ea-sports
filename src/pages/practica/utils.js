export function validateEmail(email, setUsernameError, setDisabled) {
  const userRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userRegex.test(email)) {
    setUsernameError("Invalid email");
    setDisabled(true);
  } else if (userRegex.test(email)) {
    setUsernameError("");
    setDisabled(false);
  }
}

export function validatePassword(password, setPasswordError, setDisabled) {
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!passwordRegex.test(password)) {
    setPasswordError("Invalid password");
    setDisabled(true);
  } else if (passwordRegex.test(password)) {
    setPasswordError("");
    setDisabled(false);
  }
}
