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
        {!localStorage.email && <i className="ibic-apps navbar__menuLink"></i>}

        {/* add useEffect or login, logout */}
        {localStorage.email && <div></div>}
      </div>
    </header>
  );
};

export default Nav;
