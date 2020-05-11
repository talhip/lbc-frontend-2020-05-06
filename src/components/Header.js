import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/leboncoin-logo.png";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  const handleDisconnect = () => {
    Cookies.remove("userToken");
    setUser(null);
    history.push("/");
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
          {user ? (
            <Link to="/publish">
              <div className="header-publish">
                <button>Déposer une annonce</button>
              </div>
            </Link>
          ) : (
            <Link to="/log_in">
              <div className="header-publish">
                <button>Déposer une annonce</button>
              </div>
            </Link>
          )}
          <div className="header-search">
            <button>
              <FontAwesomeIcon icon="search" />
              &nbsp;Rechercher
            </button>
          </div>
        </div>
        <div className="header-right">
          <div className="header-connect">
            {user ? (
              <button onClick={handleDisconnect}>
                <FontAwesomeIcon icon="user" />
                &nbsp;Se déconnecter
              </button>
            ) : (
              <Link to="/log_in">
                <button>
                  <FontAwesomeIcon icon="user" />
                  &nbsp;Se connecter
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
