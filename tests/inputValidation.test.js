const inputValidation = require("./../inputValidation.js");

describe("checkValidation", () => {
  it("should only accept type Number for numOfUsers", () => {
    const input = {
      numOfUsers: 1,
      gender: "both",
    };

    const validation = inputValidation(input);
    expect(validation.error).toEqual(false);
  });
});
