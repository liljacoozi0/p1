// jshint esversion: 7
var eurosToDollars = function(n) {
  let exchange = 1.09 * n;
  exchange = exchange.toFixed(2);
  return exchange;
};
console.log("$ ", eurosToDollars(5));
console.log("$ ", eurosToDollars(100));
