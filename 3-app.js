const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternativeSyntax");

require("./7-mindGrenade");

console.log(data);
console.log(names);
console.log(sayHi);
console.log(peter);

sayHi("susan");
sayHi(john);
sayHi(names.peter);
