const express = require("express");
const apiRouter = express.Router();
const mediaRouter = require("./mediaRoutes");

apiRouter.use("/media", mediaRouter);

module.exports = apiRouter;
