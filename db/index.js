const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("mongodb connect successfully"))
  .catch((err) => console.log(err));
