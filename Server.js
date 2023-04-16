let currentTime = new Date();
let currentTimeAsString = currentTime.toLocaleString();

function updateTime() {
  currentTime = new Date();
  currentTimeAsString = currentTime.toLocaleString();
}

setInterval(updateTime, 60000);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request: " + req.method);
  res.statusCode = 200;
  console.log("Response: " + res.statusCode);
  res.setHeader("Content.Type", "text/plain");
  res.write(
    "<html><body><center><h1>The time of today is:</h1><h3>(Updated every minute)</h3></body><center></html>"
  );
  res.write(currentTimeAsString);
  res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log("Server running on port " + port);
});
