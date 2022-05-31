console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);
console.log("Printing Hello World Every sec");
setInterval(() => {
  console.log("Hello World");
}, 1000);
