import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Nav from "./Nav";

import validateForm from "../utils/validateForm";
import validateFileType from "../utils/validateFile";
import axios from "../axios";

import "../style/Form.css";

const Form = () => {
  let history = useHistory();

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState({});

  useEffect(() => {}, [errors, file]);

  const fileUpload = (e) => {
    const fileokay = document.querySelector(".form__fileOkay");
    const fileinvalid = document.querySelector(".form__fileInvalid");

    setFile(e.target.files[0]);

    if (e.target.files[0].name && validateFileType(e.target.files[0].name)) {
      fileokay.style.display = "block";
      fileinvalid.style.display = "none";
    } else if (
      e.target.files[0].name &&
      !validateFileType(e.target.files[0].name)
    ) {
      fileinvalid.style.display = "block";
      fileokay.style.display = "none";
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
      formdata.append("file", file);

      axios.post("/form", formdata).then(
        (response) => {
          if (response.status === 201) {
            document.querySelector(".form__okay").click();
            document.querySelector(".form__okay").disabled = true;
          }
        },
        (error) => console.log(error)
      );
    }
  };

  const backHome = () => {
    history.push("/submissions");
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
          <div className="form__fileInvalid">
            File <strong>{file.name}</strong> not supported
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

      <button
        className="button small open-modal form__okay"
        data-target="#modal"
      >
        Hidden button to open Popup
      </button>

      <div className="modal" id="modal">
        <div className="modal-container">
          <div className="modal-header">
            <h3>Form Submitted Successfully</h3>
            <i onClick={backHome} className="ibic-clear close-modal"></i>
          </div>
          <div className="modal-content">
            <p>
              Your query has successfully been submitted! Kindly check your
              registered email for confirmation.
            </p>
          </div>
          <div className="modal-footer">
            <button onClick={backHome} className="button secondary close-modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
