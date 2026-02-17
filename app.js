const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("./server/config/db");
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.use(express.static("public"));
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/dummydate"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
