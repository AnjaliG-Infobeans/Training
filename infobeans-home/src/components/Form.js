import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import "../style/Form.css";

const Form = () => {
  const [errors, setErrors] = useState({});

  useEffect(() => {}, [errors]);

  const submitForm = (e) => {
    e.preventDefault();

    const fname = document.querySelector("#form__fname").value;
    const lname = document.querySelector("#form__lname").value;
    const email = document.querySelector("#form__email").value;
    const message = document.querySelector("#form__msg").value;

    const errors = {};
    if (!fname) {
      errors.fname = "First name is required";
    }
    if (!lname) {
      errors.lname = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!message) {
      errors.message = "Message is required";
    }
    // console.log(errors);
    setErrors(errors);
  };
  return (
    <div className="form">
      <Nav />

      <div className="form__container">
        <img
          className="form__logo"
          src="https://infobeans-design-system.web.app/images/logo-infobeans-black.svg"
          alt="logo"
        />
        <p className="form__contact">Contact Us!!</p>
        <form method="POST" className="form__data" onSubmit={submitForm}>
          <div className="form__field">
            <label htmlFor="form__fname">First Name</label>
            <input
              type="text"
              name="form__fname"
              className="form__input"
              id="form__fname"
            />
          </div>
          <div className="form__error">{errors.fname}</div>

          <div className="form__field">
            <label htmlFor="form__lname">Last name</label>
            <input
              type="text"
              className="form__input"
              id="form__lname"
              name="form__lname"
            />
          </div>
          <div className="form__error">{errors.lname}</div>

          <div className="form__field">
            <label htmlFor="form__email">Email</label>
            <input
              type="text"
              className="form__input"
              id="form__email"
              name="form__email"
            />
          </div>
          <div className="form__error">{errors.email}</div>

          <div className="form__field">
            <label htmlFor="form__msg">Message</label>
            <textarea
              type="text"
              rows="7"
              className="form__input"
              id="form__msg"
              name="form__msg"
            />
          </div>
          <div className="form__error">{errors.message}</div>

          <div className="form__fileOkay">File uploaded successfully</div>
          <div className="form__fileWrapper">
            <div className="form__field">
              <label htmlFor="form__file" className="form__customFile">
                Attach File
              </label>
              <input
                type="file"
                className="form__input"
                id="form__file"
                name="form__file"
              />
            </div>
            <button className="form__submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
