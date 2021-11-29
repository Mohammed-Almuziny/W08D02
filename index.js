const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./db");

const rolesModel = require("./db/models/roles");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(201).send("hallo world");
});

app.post("/createRole", (req, res) => {
  const { role, permissions } = req.body;

  const newRole = new rolesModel({
    role,
    permissions,
  });

  newRole
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
