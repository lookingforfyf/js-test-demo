// // math.test.js
// const { add, subtract } = require('./math');

// test('adds 1 + 2 to equal 3', () => {
//   expect(add(1, 2)).toBe(3);
// });

// test('subtracts 5 - 3 to equal 2', () => {
//   expect(subtract(5, 3)).toBe(2);
// });

// math.test.js
const { add, subtract, multiply, divide, power, fetchData } = require('./math');
// import { add, subtract, multiply, divide, power } from './math.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies 4 * 4 to equal 6', () => {
  expect(multiply(4, 4)).toBe(16);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero');
});

test('calculates 2 ^ 3 to equal 8', () => {
  expect(power(2, 3)).toBe(8);
});

test('fetchData returns "data"', async () => {
  const data = await fetchData();
  expect(data).toBe('data');
});