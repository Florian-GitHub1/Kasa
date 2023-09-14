import React from "react";
import "../style/components/_navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="../img/Logo.png" alt="Logo de Kasa" />
      <ul className="navigation_li">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="li_desktop-version">Accueil</li>
          <li className="li_responsive-version">ACCUEIL</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="li_desktop-version">A Propos</li>
          <li className="li_responsive-version">A PROPOS</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
