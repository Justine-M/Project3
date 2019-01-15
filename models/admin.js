const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Email: { type: String, required: true },
  date: { type: Date, default: Date.now },
  Memories: {type: String, required: true},
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
