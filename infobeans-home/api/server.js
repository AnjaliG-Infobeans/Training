const express = require("express");
const cors = require("cors");
const Mongoose = require("mongoose");
const dotenv = require("dotenv");

const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 9000;

// Render JSON data
app.use(express.json());

// Static folder uploads, can be accessed as http://localhost:${port}/uploads/<filename.ext>
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors());
dotenv.config();

// Connect to Database
Mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Add routes to the server
app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
