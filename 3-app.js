const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

console.log(names);
console.log(sayHi);
console.log(peter);

sayHi("susan");
sayHi(john);
sayHi(names.peter);
