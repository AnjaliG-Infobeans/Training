const express = require("express");
const jwt = require("jsonwebtoken");

const Users = require("../model/userSchema");
const Jobs = require("../model/jobSchema");

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

module.exports = router;
