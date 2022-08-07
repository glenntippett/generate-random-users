import { Input } from "./types/generateUsersInput";

function inputValidation(input: Input) {
  const { numOfUsers, gender } = input;
  const inputValidation = {
    error: false,
    message: new Array(),
  };

  if (typeof numOfUsers !== "number") {
    inputValidation.message.push("numOfUsers must be of type number");
  }

  if (inputValidation.message.length > 0) {
    inputValidation.error = true;
  }

  return inputValidation;
}

module.exports = inputValidation;
