// jshint esversion: 7
var toDollars = function(c, n) {
  let exchange = c * n;
  exchange = exchange.toFixed(2);
  return exchange;
};
console.log(toDollars(1.24, 5.2));
console.log(toDollars(1.04, 1));
