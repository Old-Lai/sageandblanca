const express = require("express");
const emailRouter = express.Router();

emailRouter.get("/recieved-message", async (req, res, next) => {
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

emailRouter.get("/manual", async (req, res, next) => {
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

module.exports = emailRouter;
