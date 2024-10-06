const express = require("express");
const mediaRouter = express.Router();
const medias = require("../database/medias");

mediaRouter.post("/media", async (req, res, next) => {
  try {
    const { url, name } = req.body;
    console.log(url, name)
    const media = await medias.create({ url, name });
    console.log("YESSSS", media)
    res.status(200).json("sucessfully created media\n", media);
  } catch ({ name, message }) {
    next({
      name,
      message,
    });
  }
});

mediaRouter.get("/media", async (req, res, next) => {
  try {
    const media = await medias.get.all();
    res.status(200).json(media);
  } catch ({ name, message }) {
    console.error("Error getting media!!!!!!", error);
    next({
      name,
      message,
    });
  }
});

mediaRouter.get("/media/:internal_id", async (req, res, next) => {
  try {
    const internal_id = req.params;
    const media = await medias.get.__byInternalId({ internal_id });
    res.status(200).json(media);
  } catch ({ name, message }) {
    console.error("Error getting media by internal id!!!!!!", error);
    next({
      name,
      message,
    });
  }
});

module.exports = mediaRouter;
