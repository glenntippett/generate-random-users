import { Gender, Input } from "./types/generateUsersInput";

const axios = require(`axios`).default;

const DEFAULT_INPUT: Input = {
  gender: Gender.Both,
  numOfUsers: 1,
};

const generateUsers = async (
  input: Input = DEFAULT_INPUT
): Promise<Array<object>> => {
  const { numOfUsers, gender } = input;

  const response = await axios
    .get(`https://randomuser.me/api/?results=${numOfUsers}&gender=${gender}`)
    .then(function (response: any) {
      return response.data.results;
    })
    .catch(function (error: any) {
      return `Error fetching data: ${error}`;
    });
  return response;
};

export { generateUsers };
