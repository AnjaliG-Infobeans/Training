import React, { useState, useEffect } from "react";

import "./Nav.css";

const Nav = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (localStorage.email) {
      setLogin(true);
    }
  }, []);

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

        {/* Login Page */}
        {!login && (
          <ul className="menu-links">
            <li>
              <i className="ibic-apps"></i>
            </li>
          </ul>
        )}

        {/* Home Page */}
        {login && (
          <ul className="navbar__links">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Message Board</a>
            </li>
            <li>
              <a>Tides</a>
            </li>
            <li>
              <a>Applauds</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
          </ul>
        )}
      </div>
      {login && (
        <div className="navbar__icon">
          <i className="ibic-apps"></i>
        </div>
      )}
      {login && (
        <div className="navbar__user">
          <div className="navbar__userName">
            <span>Anjali</span> <span>Goyal</span>
          </div>
          <img
            className="navbar__userImg"
            src="https://infobeans-intranet.web.app/assets/images/sample-profile-image.jpg"
            alt="user-img"
          />
          <i className="ibic-caret-down"></i>
        </div>
      )}
    </header>
  );
};

export default Nav;
