import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <header className="nav">
      <div className="nav__logoWrapper">
        <img
          className="nav__logo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-white.svg"
          alt="logo"
        />
        <div className="text-portal nav__portal">Intranet Portal</div>
      </div>
      <div className="nav__menu">
        <i className="ibic-apps nav__menuLink"></i>
      </div>
    </header>
  );
};

export default Nav;
