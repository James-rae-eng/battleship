// import './style.css';

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function capitalize(string) {
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
}

function analyzeArray(array) {
  const { length } = array;
  const sumTotal = array.reduce((a, b) => a + b, 0);
  const average = (sumTotal / length);
  const min = Math.min(...array);
  const max = Math.max(...array);
  return {
    average, min, max, length,
  };
}

function shipFactory(length) {
  const ship = {
    length,
    hits: 0,
    sunk: false,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      if (this.hits === length) {
        this.sunk = true;
      }
      return this.sunk;
    },
  };
  return ship;
}

module.exports = {
  sum, subtract, capitalize, analyzeArray, shipFactory,
};
