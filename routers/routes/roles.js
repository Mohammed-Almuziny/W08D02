const express = require("express");

const { createRole, getRole } = require("./../controllers/roles");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", createRole);
rolesRouter.get("/getRole", getRole);

module.exports = rolesRouter;
