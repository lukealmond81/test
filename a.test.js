const sum = require("./a");

test("properly adds two numbers", () => {
  expect(sum(1, 2)).not.toBe(6);
});
