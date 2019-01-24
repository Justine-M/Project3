const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventName: { type: String, required: true },
  host: { type: Schema.Types.ObjectId, ref: 'Host' },
  type: {type:String, require: true},
  date: {type:Date}, 
  notes:{type:String},
  description: { type: Boolean, required: true },
  guests: [{ type:Schema.Types.ObjectId, ref: 'Guest'}]


});

const Events = mongoose.model("Event", EventSchema);

module.exports = Events;
