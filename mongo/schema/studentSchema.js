const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  class: String,
  rollNumber: Number,
});

const StudentData = new mongoose.model("StudentData", studentSchema);
module.exports = StudentData;
