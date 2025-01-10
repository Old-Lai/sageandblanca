const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const pool = require("./src/client");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const apiRouter = require("./src/routes/api");

async function ConnectPool() {
  // try {
  //   console.log("Connecting to database..........");
  //   await pool.connect(); 
  //   console.log("Connected to database server");
  // } catch (error) {
  //   console.error("Failed to connect to database server", error);
  //   throw error; //prvent code from runnin if no connection
  // }
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

ConnectPool();
app.use(express.json());
// app.use(express.static("public"));
app.use(cors());
app.use("/api", apiRouter);

app.get("/", async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: "Sage and Blanca <no-reply@sageandblanca.com>",
    to: ["henrylai8115@gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
});

app.use((err, req, res, next) => {
  res.status(500).send({
    status: "error",
    name: err.name,
    message: err.message,
  });
});
