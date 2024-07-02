const joi = require("joi");
const { alphabetRegex } = require("../CONSTANT.js");
exports.signupSchema = joi.object({
  firstName: joi.string().pattern(alphabetRegex).min(3).max(255).required(),
  lastName: joi.string().pattern(alphabetRegex).min(3).max(255).required(),
  mobile: joi
    .string()
    .pattern(/^[1-9]\d*$/)
    .length(10)
    .required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});
