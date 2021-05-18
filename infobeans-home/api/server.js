const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
const dotenv = require("dotenv");

const routes = require("./routes/routes");

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

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
