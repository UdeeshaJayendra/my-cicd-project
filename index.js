const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from my CI/CD app!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;