const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 4000;

const app = http.createServer((req, res) => {
  //home page
  if (req.url=== "/") {
    fs.readFile(path.join(__dirname, 'home.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
        return;
      };
    res.writeHead(200, {"conten_type":"text/html"});
    res.end(data);
  })
  } else if (req.url=== "/about") {
    //about page
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
        return;
      };
    res.writeHead(200, {"conten_type":"text/html"});
    res.end(data);
  })
}else if (req.url=== "/contact") {
  //contact page
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
        return;
      };
    res.writeHead(200, {"conten_type":"text/html"});
    res.end(data);
  })
}else{
  //wild page if content is not available
   res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
}
});

app.listen(port, () => {
  console.log(`server is runner in http://localhost:${port}`);
});
