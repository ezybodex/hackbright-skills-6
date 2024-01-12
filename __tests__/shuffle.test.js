const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('should return an array', () => {
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return an array of the same length as the argument sent in', () => {
    const inputArray = [1, 2, 3];
    const result = shuffle(inputArray);
    expect(result.length).toBe(inputArray.length);
  });
});
