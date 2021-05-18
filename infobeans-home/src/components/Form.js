import React from "react";
import Nav from "./Nav";

import "../style/Form.css";

const submitForm = (e) => {
  e.preventDefault();
};

const Form = () => {
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
            <input type="text" className="form__input" id="form__fname" />
          </div>
          <div className="form__field">
            <label htmlFor="form__lname">Last name</label>
            <input type="text" className="form__input" id="form__lname" />
          </div>
          <div className="form__field">
            <label htmlFor="form__email">Email</label>
            <input type="text" className="form__input" id="form__email" />
          </div>
          <div className="form__field">
            <label htmlFor="form__msg">Message</label>
            <textarea
              type="text"
              rows="7"
              className="form__input"
              id="form__msg"
            />
          </div>
          <div className="form__fileWrapper">
            <div className="form__field">
              <label htmlFor="form__file" className="form__customFile">
                Attach File
              </label>
              <input type="file" className="form__input" id="form__file" />
              <div className="form__fileErr">File uploaded successfully</div>
            </div>
            <button className="form__submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
