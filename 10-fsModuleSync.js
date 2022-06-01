// Reference Url=https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

const { readFileSync, writeFileSync, read } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } //flag a is append without flag argument it will clear the file and rewrite
);

console.log("Done with the task");
console.log("Starting new task");
