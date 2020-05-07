import React from "react";
import logo from "../assets/img/leboncoin-logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ user, setUser }) => {
  const handleDisconnect = () => {
    Cookies.remove("userToken");
    setUser(null);
  };
  return (
    <div className="header">
      <div className="header-center">
        <div className="header-left">
          <Link to="/">
            <div className="header-logo">
              <img className="logo" alt="logo" src={logo} />
            </div>
          </Link>
          <div className="header-publish">
            <button>Déposer une annonce</button>
          </div>
          <div className="header-search">
            <button>Rechercher</button>
          </div>
        </div>
        <div className="header-right">
          <div className="header-connect">
            {user ? (
              <Link to="/">
                <button onClick={handleDisconnect}>Se déconnecter</button>
              </Link>
            ) : (
              <Link to="/log_in">
                <button>Se connecter</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
