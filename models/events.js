const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: { type: String, required: true },
  host: { type: Schema.Types.ObjectId, ref: 'Admin' },
  type: {type:String, require: true},
  date: {type:Date}, 
  memories:{type:Boolean},
  description: { type: String, required: true },
  guests: [{ type:Schema.Types.ObjectId, ref: 'Guest'}]


});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
