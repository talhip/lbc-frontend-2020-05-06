import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
const Signup = ({ setUser }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && password && confirmPassword) {
      if (confirmPassword === password) {
        const user = { email: email, username: name, password: password };
        try {
          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/user/sign_up",
            user
          );
          Cookies.set("userToken", response.data.token, { expires: 2000 });
          setUser({ token: response.data.token });
          history.push("/");
        } catch (error) {
          console.log(error.message);
        }
      } else {
        alert("Passwords must be the same !");
      }
    } else {
      alert("All fields must be filled !");
    }
  };
  return (
    <div className="content signup">
      <div>Créez un compte</div>
      <form className="form-signup" onSubmit={handleSubmit}>
        <span>Pseudo *</span>
        <input
          className="field"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <span>Adresse email *</span>
        <input
          className="field"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Mot de passe *</span>
        <input
          className="field"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>Confirmer le mot de passe *</span>
        <input
          className="field"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <input
          className="submit-button"
          type="submit"
          value="Créer mon Compte Personnel"
        />
      </form>
    </div>
  );
};

export default Signup;
