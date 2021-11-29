const express = require("express");

const { register, logIn } = require("./../controllers/users");

const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/logIn", logIn);

module.exports = usersRouter;
