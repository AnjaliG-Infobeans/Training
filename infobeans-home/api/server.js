const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const Users = require("./userSchema");
const Jobs = require("./jobSchema");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
dotenv.config();

Mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Verify Token: middleware function
const verifyToken = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader.split(" ")[1];

    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/jobs", verifyToken, (req, res) => {
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

app.post("/login", (req, res) => {
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
