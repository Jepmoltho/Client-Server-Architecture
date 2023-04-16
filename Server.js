let currentTime = new Date();
let currentTimeAsString = currentTime.toLocaleString();

function updateTime() {
  currentTime = new Date();
  currentTimeAsString = currentTime.toLocaleString();
  timeEncrypted = cipher.update(currentTimeAsString, "utf-8", "hex");
}

setInterval(updateTime, 6000);

const encryptionKey = "Yq3t6w9z$C&F)J@McQfTjWnZr4u7x!A%";
const algoritm = "aes-256-cbc";

const http = require("http");
const crypto = require("crypto");
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algoritm, encryptionKey, iv);
let timeEncrypted = cipher.update(currentTimeAsString, "utf-8", "hex");

const server = http.createServer((req, res) => {
  console.log("Request: " + req.method);
  res.statusCode = 200;
  console.log("Response: " + res.statusCode);
  res.setHeader("Content.Type", "text/plain");
  res.write(
    "<html><body><center><h1>The time of today is:</h1><h3>(Updated every minute)</h3></body><center></html>"
  );
  //res.write(currentTimeAsString);
  res.write(timeEncrypted);
  res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log("Server running on port " + port);
});
