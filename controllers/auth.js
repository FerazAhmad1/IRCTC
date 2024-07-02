const { applyValidation } = require("../utils/helper.js");
const { signupSchema } = require("../utils/schema.js");
const User = require("../models/user.js");
exports.signup = async (req, res) => {
  try {
    const {
      firstName = null,
      lastName = null,
      email = null,
      mobile = null,
      password = null,
    } = req.body;
    const signupBody = { firstName, lastName, mobile, email };

    const validate = await applyValidation(signupSchema, signupBody);
    const user = await User.create(signupBody);
  } catch (error) {
    console.log(error.message);
  }
};
exports.login = (req, res) => {};
