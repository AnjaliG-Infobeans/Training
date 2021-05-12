import React from "react";

import { useHistory } from "react-router";

import "./Login.css";

const user = {
  email: "abc@gmail.com",
  password: "Test@123",
};

const Login = () => {
  // if (localStorage.email) {
  //   history.push("/home");
  // }
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    const email = e.target.elements.login__email.value;
    const password = e.target.elements.login__password.value;

    if (email === user.email && password === user.password) {
      localStorage.email = email;
      localStorage.password = password;
      history.push("/home");
    }
  };
  return (
    <div className="login">
      <form className="login__form" method="POST" onSubmit={login}>
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
      </form>
      <footer className="login__footer">
        &copy; Copyright 2020 InfoBeans. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Login;
