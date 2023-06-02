/* eslint-disable */

const formulas = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(formulas.sum(1, 2)).toBe(3);
});

test('Capitalize string', () => {
  expect(formulas.capitalize('hello')).toMatch('Hello');
});

test('Reverse a string', () => {
  expect(formulas.reverseString('hello')).toMatch('olleh');
});

test('Reverse a string', () => {
  expect(formulas.subtract(5, 3)).toBe(2);
});

test('take array of numbers and return; avg, min, max & length', () => {
  expect(formulas.analyzeArray([1, 4, 7, 3, 9, 13, 5])).toEqual({
    average: 6,
    min: 1,
    max: 13,
    length: 7,
  });
});
