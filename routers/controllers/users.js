const usersModel = require("./../../db/models/users");

const register = (req, res) => {
  const { email, password, role } = req.body;

  const savedEmail = email.toLowerCase();

  const newUser = new usersModel({
    email: savedEmail,
    password,
    role,
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });

  res.status(200).json(req.body);
};

module.exports = { register };
