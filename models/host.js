const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HostSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  password: {type:String},
  events: [{ type:Schema.Types.ObjectId, ref: 'Event'}]
});

const Host = mongoose.model("Host", HostSchema);

module.exports = Host;
