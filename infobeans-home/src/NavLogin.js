import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="navbar">
      <div className="navbar__logoWrapper">
        <img
          className="navbar__logo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"
          alt="logo"
        />
        <div className="text-portal navbar__portal">Intranet Portal</div>
      </div>
      <div className="navbar__menu">
        <span id="toggle-menu-header" className="ibic-menu"></span>
        <span className="ibic-clear" id="close-menu-header"></span>

        <ul className="menu-links">
          <li>
            <i className="ibic-apps"></i>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
