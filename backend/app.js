const express = require("express");
const cors = require("cors");
const pool = require("./src/client");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

try {
  async function ConnectPool() {
    await pool.connect();
  }

  ConnectPool();
  console.log("Connected to database server");
} catch (error) {
  console.error("Failed to connect to database server", error);
}

app.use((err, req, res, next) => {
  res.status(500).next({
    status: "error",
    name: err.name,
    message: err.message,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
