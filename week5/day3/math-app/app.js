
const _ = require("lodash");
const math = require("./math");

const sum = math.add(5, 3);
const product = math.multiply(4, 2);

const numbers = [10, 20, 30, 40];
const total = _.sum(numbers);

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Lodash sum:", total);