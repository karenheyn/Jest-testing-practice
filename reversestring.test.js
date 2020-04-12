const reverseString = require("./reversestring");

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});
