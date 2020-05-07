import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      const user = { email: email, password: password };
      try {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/log_in",
          user
        );
        Cookies.set("userToken", response.data.token, { expires: 2000 });
        setUser({ token: response.data.token });
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("All fields must be filled !");
    }
  };
  return (
    <div className="content login">
      <div>Connexion</div>
      <form className="form-login" onSubmit={handleSubmit}>
        <span>Adresse email</span>
        <input
          className="field"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Mot de passe</span>
        <input
          className="field"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input className="submit-button" type="submit" value="Se connecter" />
      </form>
      <div>Vous n'avez pas de compte ?</div>
      <Link to="/sign_up">
        <button>Créer un compte</button>
      </Link>
    </div>
  );
};

export default Login;
