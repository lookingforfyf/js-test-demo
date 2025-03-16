// math.js
//MARK: - math.js
function add(a, b) {
  return a + b;
}
//MARK: - subtract
function subtract(a, b) {
  return a - b;
}

//MARK: - multiply
function multiply(a, b) {
  return a * b;
}
//MARK: - divide
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('data'), 1000);
  });
}

module.exports = { add, subtract, multiply, divide, power, fetchData };

// export { add, subtract, multiply, divide, power };
