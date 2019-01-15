const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  plusOne: { type: boolean, required: true },
  date: { type: Date, default: Date.now },
  memories: {type: String, required: false},
});

const Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;
