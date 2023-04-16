//The client is the http object from the node.js library
const http = require("http");

//configuration of the request
const confiq = {
  hostname: "localhost",
  port: 3002,
  path: "/",
  method: "Get",
};

//Sending the get request. When res resolves, we print it out as a webpage.
//To make the request, run the server and type http://localhost:3002/ in you browser
const req = http.request(confiq, (res) => {
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.end();
