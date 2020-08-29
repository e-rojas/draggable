const router = require("express").Router();
const Message = require("../models/message");

// Add a messsage to DB

router.post("/", (req, res) => {
  Message.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(404).send({ message: "Message not saved to DB", error });
    });
});

module.exports = router;
