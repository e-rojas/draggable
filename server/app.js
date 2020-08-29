const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ credentials: true }));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();
port = 4444;

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
