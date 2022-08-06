function inputValidation(input) {
  const { numOfUsers, gender } = input;
  const inputValidation = {
    error: false,
    message: new Array(),
  };

  if (typeof numOfUsers !== "number") {
    inputValidation.message.push("numOfUsers must be of type number");
  }
  if (gender !== "male" || gender !== "female" || gender !== "both") {
    inputValidation.message.push("gender must be male or female");
  }

  if (inputValidation.message.length > 0) {
    inputValidation.error = true;
  }

  return inputValidation;
}

module.exports = inputValidation;
