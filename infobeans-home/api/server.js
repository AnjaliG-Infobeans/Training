const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
const Users = require("./userSchema");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const DB_CONNECTION_STRING = "mongodb://127.0.0.1:27017/infobeans-portal";

Mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
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
          res.send(data[0].email);
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
