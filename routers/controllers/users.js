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

const logIn = (req, res) => {
  const { email, password } = req.body;

  usersModel
    .findOne({ email })
    .then((result) => {
      if (result) {
        if (result.email === email) {
          if (result.password === password) {
            res.status(200).json(result);
          } else {
            res.status(400).json("invalid email or password");
          }
        } else {
          res.status(400).json("invalid email or password");
        }
      } else {
        res.status(404).json("email dose not exist");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { register, logIn };
