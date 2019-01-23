const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  plusOne: { type: Boolean, required: true },
  memories: {type: String, required: false},
  attending: {type: Boolean, required:true},
  event: { type:Schema.Types.ObjectId, ref: 'Event'}
});

const Guest = mongoose.model("Guest", GuestSchema);



module.exports = Guest;
