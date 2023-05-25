const updateRemoteStudents = require("../remoteStudents");

describe("updateRemoteStudents", () => {
  test("should return empty array if passed empty array", () => {
    expect(updateRemoteStudents([])).toEqual([]);
  });
  test("should return a new array", () => {
    const inputArray = [];
    const output = updateRemoteStudents(inputArray);
    expect(inputArray).not.toBe(output);
  });
  test("when passed a array with one object with a location property, return an equal array", () => {
    const input = [{ name: "Hypatia", age: 31, location: "leeds" }];
    const expected = [{ name: "Hypatia", age: 31, location: "leeds" }];
    const actual = updateRemoteStudents(input);
    expect(actual).toEqual(expected);
  });
  test("should when passed an array with one object without a location, updates students location with remote", () => {
    const input = [{ name: "Ramanujan", age: 22 }];
    const expected = [{ name: "Ramanujan", age: 22, location: "remote" }];
    const actual = updateRemoteStudents(input);
    expect(actual).toEqual(expected);
  });
  test("when passed an array with multiple studes of mixed locations, returns array where students with no locations have remote", () => {
    const input = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Katherine", age: 30 },
      { name: "Hev", age: 27, location: "Manchester" },
    ];
    const expected = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Katherine", age: 30, location: "remote" },
      { name: "Hev", age: 27, location: "Manchester" },
    ];
    const actual = updateRemoteStudents(input);
    expect(actual).toEqual(expected);
  });
  test("should not mutate the passed in array", () => {
    const input = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Katherine", age: 30 },
      { name: "Hev", age: 27, location: "Manchester" },
    ];
    const inputCopy = [
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22 },
      { name: "Katherine", age: 30 },
      { name: "Hev", age: 27, location: "Manchester" },
    ];
    updateRemoteStudents(input);
    expect(input).toEqual(inputCopy);
  });
});
