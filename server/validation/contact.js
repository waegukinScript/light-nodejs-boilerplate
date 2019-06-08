const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateContactInput(userInput) {
  // console.log("userInput ", userInput);
  let errors = {};
  userInput.name = !isEmpty(userInput.name) ? userInput.name : "";
  userInput.phone = !isEmpty(userInput.phone) ? userInput.phone : "";
  userInput.email = !isEmpty(userInput.email) ? userInput.email : "";
  userInput.message = !isEmpty(userInput.message) ? userInput.message : "";

  // name
  if (Validator.isEmpty(userInput.name)) {
    errors.name = "Name field is required.";
  } else if (!Validator.isLength(userInput.name, { min: 3 })) {
    errors.name = "Name should be at least 3 characters long.";
  } else if (!Validator.isLength(userInput.name, { max: 30 })) {
    errors.name = "Name is too long.";
  }

  // phone
  if (Validator.isEmpty(userInput.phone)) {
    errors.phone = "Phone field is required.";
  } else if (!Validator.isLength(userInput.phone, { min: 3 })) {
    errors.phone = "Phone is too short.";
  } else if (!Validator.isLength(userInput.phone, { max: 30 })) {
    errors.phone = "Phone is too long.";
  }

  // email
  if (Validator.isEmpty(userInput.email)) {
    errors.email = "Email field is required.";
  } else if (!Validator.isLength(userInput.email, { min: 5 })) {
    errors.email = "Email is too short.";
  } else if (!Validator.isLength(userInput.email, { max: 40 })) {
    errors.email = "Email is too long.";
  } else if (!Validator.isEmail(userInput.email)) {
    errors.email = "Email format is invalid.";
  }

  // message
  if (Validator.isEmpty(userInput.message)) {
    errors.message = "Message field is required.";
  } else if (!Validator.isLength(userInput.message, { min: 10 })) {
    errors.message = "Message is too short.";
  } else if (!Validator.isLength(userInput.message, { max: 1000 })) {
    errors.message = "Message is too long.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
