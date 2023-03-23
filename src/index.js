const http = require("http");



const server = http.createServer((req, res) => {
  if (req.url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Dominos!");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const contactInfo = {
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    };
    res.end(JSON.stringify(contactInfo));
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

server.listen(8081, () => {
  console.log(`Server is listening on port no 8081`);
});

module.exports = server;
