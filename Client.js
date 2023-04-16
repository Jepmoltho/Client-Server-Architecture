const http = require("http");

const confiq = {
  hostname: "localhost",
  port: 3001,
  path: "/",
  method: "Get",
};

const req = http.request(confiq, (res) => {
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.end();
