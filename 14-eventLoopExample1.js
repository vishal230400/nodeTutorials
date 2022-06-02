const { readFile } = require("fs");

console.log("Started first task");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("Completed First Task");
});

console.log("Starting New Task");
