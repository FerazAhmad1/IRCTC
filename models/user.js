const { DataTypes } = require("sequelize");
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
  familyMobile: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: {
        msg: "Family mobile number must contain numeric characters only",
      },
      len: {
        args: [10, 10],
        msg: "Family mobile number must be 10 digits",
      },
    },
  },
  pincode: {
    type: DataTypes.STRING,
    validate: {
      isNumeric: {
        msg: "Pincode must contain numeric characters only",
      },
      len: {
        args: [6, 6],
        msg: "Pincode must be 6 digits",
      },
    },
  },
  village: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: "Village name must be between 3 and 255 characters",
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
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: "Country name must be between 3 and 255 characters",
      },
    },
  },
});

module.exports = User;
