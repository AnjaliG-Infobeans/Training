const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  location: String,
  experience: String,
  description: String,
  tags: [String],
});

module.exports = mongoose.model("jobs", jobSchema);
