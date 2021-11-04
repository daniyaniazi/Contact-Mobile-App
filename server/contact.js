const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  picture: String,
  salary: Number,
  position: String,
});

mongoose.model("contact", ContactSchema);
