const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("./server/config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
