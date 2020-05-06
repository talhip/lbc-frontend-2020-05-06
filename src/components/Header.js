import React from "react";
import logo from "../assets/img/leboncoin-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-center">
        <div className="header-left">
          <div className="header-logo">
            <img className="logo" alt="logo" src={logo} />
          </div>
          <div className="header-publish">
            <button>Déposer une annonce</button>
          </div>
          <div className="header-search">
            <button>Rechercher</button>
          </div>
        </div>
        <div className="header-right">
          <div className="header-connect">
            <button>Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
