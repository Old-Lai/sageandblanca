const express = require("express");
const cors = require("cors");
const pool = require("./src/client");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const mediaRouter = require('./src/routes/mediaRoutes')

async function ConnectPool() {
  try {
    console.log("Connecting to database..........");
    await pool.connect();
    console.log("Connected to database server");
  } catch (error) {
    console.error("Failed to connect to database server", error);
    throw error; //prvent code from runnin if no connection
  }
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

ConnectPool();
app.use(express.json())
app.use(cors())
app.use('/api', mediaRouter)

app.use((err, req, res, next) => {
  res.status(500).send({
    status: "error",
    name: err.name,
    message: err.message,
  });
});
