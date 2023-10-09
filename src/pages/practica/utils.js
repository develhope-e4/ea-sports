export function validateEmail(email, setUsernameError) {
  const userRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userRegex.test(email)) {
    setUsernameError("Invalid email");
  } else if (userRegex.test(email)) {
    setUsernameError("");
  }
}

export function validatePassword(password, setPasswordError) {
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (!passwordRegex.test(password)) {
    setPasswordError("Invalid password");
  } else if (passwordRegex.test(password)) {
    setPasswordError("");
  }
}
