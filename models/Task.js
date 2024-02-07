const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: String,
  isComplete: Boolean,
});

module.exports = { Task };