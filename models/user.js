const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../utils/database.js");
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphaOnly(value) {
        if (!/^[A-Za-z]+$/.test(value)) {
          throw new Error("First name can only contain alphabetic characters");
        }
      },
      min: {
        args: 3,
        msg: "First name must be at least 3 characters long",
      },
      max: {
        args: 255,
        msg: "First name must be at most 255 characters long",
      },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlphaOnly(value) {
        if (!/^[A-Za-z]+$/.test(value)) {
          throw new Error("Last name can only contain alphabetic characters");
        }
      },
      min: {
        args: 3,
        msg: "Last name must be at least 3 characters long",
      },
      max: {
        args: 255,
        msg: "Last name must be at most 255 characters long",
      },
    },
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Mobile number must contain numeric characters only",
      },
      len: {
        args: [10, 10],
        msg: "Mobile number must be 10 digits",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        msg: "Email must be a valid email address",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
User.addHook("beforeSave", "hashPassword", async function (user, option) {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  } catch (error) {}
});
module.exports = User;
