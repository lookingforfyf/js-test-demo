// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

// Test cases for add function
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// Test cases for subtract function
test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtracts -5 - -3 to equal -2', () => {
  expect(subtract(-5, -3)).toBe(-2);
});

// Test cases for multiply function
test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiplies -2 * 3 to equal -6', () => {
  expect(multiply(-2, 3)).toBe(-6);
});

// Test cases for divide function
test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
});