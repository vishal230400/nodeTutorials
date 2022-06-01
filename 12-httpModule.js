//Reference Url= https://nodejs.org/dist/latest-v18.x/docs/api/http.html

const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req);
  if (req.url === "/") {
    res.write("Welcome to our Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.end("Here is our short description");
  } else {
    res.end(
      `<h1>Oops!</h1> <p> We can't seem to find the page that you are looking</p><a href='/'> Back Home </a>`
    );
  }
});

server.listen(5000);
