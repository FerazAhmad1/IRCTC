const express = require("express");
const sequelize = require("./utils/database.js");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const app = express();
app.use(express.json());
app.use("api/v1/user", userRouter);
(async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error.message);
  }
})();

module.exports = app;
