const express = require("express");

const rolesModel = require("./../../db/models/roles");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", (req, res) => {
  const { role, permissions } = req.body;

  const newRole = new rolesModel({
    role,
    permissions,
  });

  newRole
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

rolesRouter.get("/getRole", (req, res) => {
  rolesModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = rolesRouter;
