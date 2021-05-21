const express = require("express");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const transporter = require("../config/mail");
const mailer = require("../controller/mailControl");

/* How we want to store our multer file */

// binary data
// const upload = multer({ dest: "./uploads/" });

// disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// only store certain file types
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // max 5 MB
  },
  fileFilter,
});

const Users = require("../model/userSchema");
const Jobs = require("../model/jobSchema");
const FormContacts = require("../model/contactSchema");

const auth = require("../config/auth");
const router = express.Router();

router.get("/jobs", auth, (req, res) => {
  Jobs.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      jwt.verify(req.token, "secretkey", (err, authData) => {
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
  // res.send(req.body);
  Users.find(
    { email: req.body.email, password: req.body.password },
    (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (data.length) {
          const user = data[0];
          jwt.sign({ user }, "secretkey", (err, token) => {
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
  formData.file = req.file.path;

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
