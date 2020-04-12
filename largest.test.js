const findLargest = require("./largest");

test("find largest value in array", () => {
  expect(findLargest([1, 2, 3, 4])).toEqual(4);
});
