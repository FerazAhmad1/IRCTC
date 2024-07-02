const joi = require("joi");
const { alphabetRegex } = require("../CONSTANT.js");
exports.signupSchema = joi.object({
  firstName: joi.string(alphabetRegex).min(3).max(255).required(),
  lastName: joi.string(alphabetRegex).min(3).max(255).required(),
  mobile: joi
    .string(/^[1-9]\d*$/)
    .length(10)
    .required(),
  familyMobile: joi
    .string(/^[1-9]\d*$/)
    .length(10)
    .required(),
  pincode: joi
    .string(/^[1-9]\d*$/)
    .length(6)
    .required(),
  village: joi.string().min(3).max(255).required(),
  email: joi.string().email().required(),
  country: joi.string().min(3).max(255).required(),
});
