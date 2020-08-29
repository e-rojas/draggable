const router = require("express").Router();
const Message = require("../models/message");

// Add a messsage to DB

router.post("/", (req, res) => {
  Message.create(req.body)
    .then((data) => {
      res.status(201).send({ message: "Succesfully saved to mongoDB!" });
    })
    .catch((error) => {
      res.status(400).send({ message: "Message not saved to DB", error });
    });
});

module.exports = router;
