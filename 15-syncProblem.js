const http = require("http");

//To understand it open two local host tabs first load about and then home
//home wont load completely till the console statment is done

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000...");
});
