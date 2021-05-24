const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const mailer = require("../controller/mailControl");
const upload = require("../config/multer");
const auth = require("../config/auth");

const Users = require("../model/userSchema");
const Jobs = require("../model/jobSchema");
const FormContacts = require("../model/contactSchema");

const router = express.Router();
dotenv.config();

router.get("/jobs", auth, (req, res) => {
  Jobs.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      jwt.verify(req.token, process.env.SECRET_KEY, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          res.status(200).send(data);
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  Users.find(
    { email: req.body.email, password: req.body.password },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (data.length) {
          const user = data[0];
          jwt.sign({ user }, process.env.SECRET_KEY, (err, token) => {
            res.send({ token: token });
          });
        } else {
          res.send({ message: "Invalid user" });
        }
      }
    }
  );
});

router.post("/form", upload.single("file"), (req, res) => {
  const formData = req.body;
  const port = process.env.PORT || 9000;
  const url = `http://localhost:${port}`;

  formData.file = `${url}/${req.file.path}`.replace("\\", "/");
  // http://localhost:9000/uploads/1621608183857-Screenshot.PNG

  FormContacts.create(formData, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      mailer(data, "admin");
      mailer(data, "user");
      res.status(201).send(data);
    }
  });
});

router.get("/forms", (req, res) => {
  FormContacts.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
