import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__form">
        <img
          className="login__formLogo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg"
          alt="logo"
        />
        <label for="login__email">Email</label>
        <input
          className="text-input-placeholder"
          type="text"
          id="login__email"
          name="login__email"
          placeholder="Your InfoBeans email address"
        />
        <label className="login__formLabel" for="login__password">
          Password <a href="#">Forgot?</a>
        </label>
        <input
          className="text-input-placeholder"
          type="text"
          id="login__password"
          name="login__password"
          placeholder="Your password"
        />
        <button className="inverse">Login to Intranet Portal</button>
      </div>
      <footer className="login__footer">
        &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
