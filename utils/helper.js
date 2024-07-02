const joi = require("joi");
exports.applyValidation = async (schema, object) => {
  try {
    const validate = await schema.validateAsync(object);
    return validate;
  } catch (error) {
    throw error;
  }
};
