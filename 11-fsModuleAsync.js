const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first},${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("Done with the task");
      }
    );
  });
});

console.log("Starting next task");
