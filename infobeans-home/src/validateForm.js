const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = (fname, lname, email, message) => {
  const errors = {
    name: "err",
  };
  let formdata = {};
  if (!fname) {
    errors.fname = "First name is required";
  }
  if (!lname) {
    errors.lname = "Last name is required";
  }
  if (!email) {
    errors.email = "Email is required";
  }
  if (!validateEmail(email)) {
    errors.email = "Enter valid email";
  }
  if (!message) {
    errors.message = "Message is required";
  } else {
    formdata = {
      fname,
      lname,
      email,
      message,
    };
    return formdata;
  }
  return errors;
};

export default validateForm;
