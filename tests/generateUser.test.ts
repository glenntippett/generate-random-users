import { generateUsers } from "../src/index";
import { Gender, Input } from "../src/types/generateUsersInput";
import { multipleUsers, singleUser } from "./fixtures/axiosUserData";

const axios = require(`axios`).default;

jest.mock(`axios`);

describe("generateUsers", () => {
  it("Generates 1 random user by default", async () => {
    axios.get.mockResolvedValue(singleUser);

    const userResponse = await generateUsers();
    expect(userResponse.length).toBe(1);
  });

  it("Generates x amount of users based on input", async () => {
    axios.get.mockResolvedValue(multipleUsers);

    const inputTwo: Input = {
      numOfUsers: 2,
      gender: Gender.Both,
    };

    const userTwoResponse = await generateUsers(inputTwo);
    expect(userTwoResponse.length).toBe(2);
  });
});
