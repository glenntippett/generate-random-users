const axios = require(`axios`).default;
const checkInputTypes = require("./checkInputTypes.js");

const DEFAULT_INPUT = {
  gender: "both",
  numOfUsers: 1,
};

async function generateUsers(input = DEFAULT_INPUT) {
  const { numOfUsers, gender } = input;

  const inputValidation = checkInputTypes(input);

  if (inputValidation.error) {
    throw new Error(inputValidation.message);
  }

  const response = await axios
    .get(`https://randomuser.me/api/?results=${numOfUsers}`)
    .then(function (response) {
      return response.data.results;
    });
  return response;
}

module.exports = generateUsers;
