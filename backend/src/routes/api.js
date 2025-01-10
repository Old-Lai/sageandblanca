const express = require("express");
const apiRouter = express.Router();
const mediaRouter = require("./mediaRoutes");
const emailRouter = require("./emailRoutes");

apiRouter.use("/media", mediaRouter);
apiRouter.use("/email", emailRouter)

module.exports = apiRouter;
