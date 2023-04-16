//Server variables
const http = require("http");

//Encryption variables
const crypto = require("crypto");
const iv = crypto.randomBytes(16);
const encryptionKey = "Yq3t6w9z$C&F)J@McQfTjWnZr4u7x!A%";
const algoritm = "aes-256-cbc";
const cipher = crypto.createCipheriv(algoritm, encryptionKey, iv);

//Time variables
let currentTime = new Date();
let currentTimeAsString = currentTime.toLocaleString();
let timeEncrypted = cipher.update(currentTimeAsString, "utf-8", "hex");

//Update the time and the encrypted time
function updateTime() {
  currentTime = new Date();
  currentTimeAsString = currentTime.toLocaleString();
  timeEncrypted = cipher.update(currentTimeAsString, "utf-8", "hex");
}

//Updating the time every minute as per the requirenment
setInterval(updateTime, 6000);

//Creating the server
const server = http.createServer((req, res) => {
  //Logging the request and the response
  console.log("Request: " + req.method);
  console.log("Response: " + res.statusCode);
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><body><center><h1>The current time is:</h1><h3>(Updated every minute)</h3></body><center></html>"
  );
  //PLEASE NOTE: I suceeded encrypting the current time, but not decrypting it. Therefore, im returning both the plain text value and the encrypted value of time to the client.
  res.write(currentTimeAsString + " <br></br>");
  res.write(timeEncrypted);
  res.end();
});

//Starting the server to listen on port 3002
const port = 3002;
server.listen(port, () => {
  console.log("Server running on port " + port);
});
