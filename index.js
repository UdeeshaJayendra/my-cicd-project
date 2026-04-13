const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from my CI/CD app!" });
});

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok",
    uptime: process.uptime().toFixed(0) + "s",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/pipeline", (req, res) => {
  res.json({
    status: "passing",
    stages: [
      { name: "Source", status: "passed" },
      { name: "Install", status: "passed" },
      { name: "Test", status: "passed" },
      { name: "Build", status: "passed" },
      { name: "Deploy", status: "passed" }
    ],
    tests: { passed: 2, failed: 0 },
    docker: "udeeshajayendra/my-cicd-app:latest"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;