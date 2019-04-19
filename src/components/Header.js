import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <img src="/philotinder.png" style={{height: '50px'}}></img>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink to="/" className="navbar-item">
          Cita
        </NavLink>

        <NavLink to="/list" className="navbar-item">
          Lista
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Header;
