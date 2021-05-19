import React, { useState, useEffect } from "react";

import Nav from "./Nav";

import validateForm from "../validateForm";
import axios from "../axios";

import "../style/Form.css";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState({});

  useEffect(() => {}, [errors, file]);

  const fileUpload = (e) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      document.querySelector(".form__fileOkay").style.display = "block";
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const fname = document.querySelector("#form__fname").value;
    const lname = document.querySelector("#form__lname").value;
    const email = document.querySelector("#form__email").value;
    const message = document.querySelector("#form__msg").value;

    const data = validateForm(fname, lname, email, message);

    if (data.name === "err") {
      setErrors(data);
    } else {
      const formdata = new FormData();
      formdata.append("fname", fname);
      formdata.append("lname", lname);
      formdata.append("email", email);
      formdata.append("message", message);
      formdata.append("source", file);
      // console.log(file);
      // axios.post("https:httpbin.org/anything", formdata).then(
      //   (response) => {
      //     console.log(response);
      //   },
      //   (error) => console.log(error)
      // );

      axios.post("/form", formdata).then(
        (response) => {
          console.log(response);
        },
        (error) => console.log(error)
      );
    }
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
        <form
          method="POST"
          className="form__data"
          encType="multipart/form-data"
          onSubmit={submitForm}
        >
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

          <div className="form__fileOkay">
            File <strong>{file.name}</strong> uploaded successfully
          </div>
          <div className="form__fileWrapper">
            <div className="form__field">
              <label htmlFor="form__file" className="form__customFile">
                Attach File
              </label>
              <input
                onChange={fileUpload}
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
