const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Karen Heyn object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Karen",
    lastName: "Heyn",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/); //can use i to not be case sensitive
});

test("admin should be in usernames", () => {
  usernames = ["bob", "jim", "admin"];
  expect(usernames).toContain("admin");
});

//async data

//promise
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1); //must have assertions and return
  return functions
    .fetchUser()
    .then((data) => expect(data.name).toEqual("Leanne Graham"));
});

//async await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1); //must have assertions and return
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
