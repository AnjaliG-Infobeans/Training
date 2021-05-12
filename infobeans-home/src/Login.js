import React from "react";

import { useHistory } from "react-router";

import axios from "./axios";
import "./Login.css";

const Login = () => {
  const history = useHistory();

  if (localStorage.email) {
    history.push("/home");
  }

  const login = (e) => {
    e.preventDefault();
    const email = e.target.elements.login__email.value;
    const password = e.target.elements.login__password.value;

    axios.post("/login", { email: email, password: password }).then(
      (response) => {
        if (response.data === email) {
          localStorage.email = email;
          history.push("/home");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <div className="login">
      <form className="login__form" method="POST" onSubmit={login}>
        <img
          className="login__formLogo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg"
          alt="logo"
        />
        <label htmlFor="login__email">Email</label>
        <input
          className="text-input-placeholder"
          type="text"
          id="login__email"
          name="login__email"
          placeholder="Your InfoBeans email address"
        />
        <label className="login__formLabel" htmlFor="login__password">
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
