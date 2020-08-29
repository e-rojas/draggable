const mongoose = require("mongoose");

module.exports = mongoose.model("message", {
  message: {
    type: String,
    required: true,
    trim: true,
  },
  form_id: {
    type: String,
    required: true,
  },
});
