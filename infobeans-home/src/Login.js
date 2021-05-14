import React from "react";

import { useHistory } from "react-router";

import axios from "./axios";
import "./Login.css";
import Nav from "./NavLogin";

const Login = () => {
  const history = useHistory();

  if (localStorage.email) {
    history.push("/home");
  }

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const login = (e) => {
    e.preventDefault();
    const email = e.target.elements.login__email.value;
    const password = e.target.elements.login__password.value;

    if (!validateEmail(email)) {
      // document.getElementById('error')
      document.querySelector(".error_email").style.display = "block";
    } else {
      axios.post("/login", { email: email, password: password }).then(
        (response) => {
          if (response.data.token) {
            localStorage.token = response.data.token;
            history.push("/home");
          } else {
            alert("Invalid credentials");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  return (
    <div className="login">
      <Nav />
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
        <div className="error_email" id="error">
          Enter valid email
        </div>
        <label className="login__formLabel" htmlFor="login__password">
          Password <a href="#">Forgot?</a>
        </label>
        <input
          className="text-input-placeholder"
          type="password"
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
