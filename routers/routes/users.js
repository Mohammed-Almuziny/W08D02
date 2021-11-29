const express = require("express");
const { model } = require("mongoose");

const { register } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);

module.exports = usersRouter;
