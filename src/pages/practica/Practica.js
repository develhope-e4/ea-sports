import React, { useEffect, useState } from "react";
import { validateEmail, validatePassword } from "./utils";
const Practica = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [disabled, setDisabled] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    console.log(user);

    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });

    validateEmail(user.username, setUsernameError, setDisabled);
    validatePassword(user.password, setPasswordError, setDisabled);
  }

  function handleClick() {
    // axios.post(`https://my-api.com`, {
    //   user: user,
    // });
    console.log("Fetch api");
  }

  useEffect(() => {}, [user]);
  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Username"
        id="username"
      />
      {usernameError && <small>{usernameError}</small>}
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        id="password"
      />
      {passwordError && <small>{passwordError}</small>}
      <button disabled={disabled} onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Practica;
