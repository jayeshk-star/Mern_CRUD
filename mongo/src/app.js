const express = require("express");
require("../db/conn");
const app = express();
const PORT = process.env.PORT || 8000;

const StudentData = require("../schema/studentSchema");

app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const result = new StudentData(req.body);
    const data = await result.save();
    res.status(200).send(data);
  } catch (err) {
    res.status(401).send(err);
  }
});
app.get("/students", async (req, res) => {
  try {
    const result = await StudentData.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(401).send(err);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
});
