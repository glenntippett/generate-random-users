const generateUsers = require("./../index.js");

describe("generateUsers", () => {
  it("Generates 1 random user by default", async () => {
    const userResponse = await generateUsers();
    expect(userResponse.length).toBe(1);
  });

  it("Generates x amount of users based on input", async () => {
    const userFiveResponse = await generateUsers({ numOfUsers: 5 });
    expect(userFiveResponse.length).toBe(5);

    const userTwoResponse = await generateUsers({ numOfUsers: 2 });
    expect(userTwoResponse.length).toBe(2);
  });
});
