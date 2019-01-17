import React, { Component } from "react";
import API from "../utils/api";
// import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/form";




class Form extends Component{
state = {
  Guests: [],
  FirstName: "",
  LastName: "",
  Attending: "",
  PlusOne: ""
};
  

  render() {
    return(
      <form>
      <Input
        value={this.state.firstName}
        onChange={this.handleInputChange}
        name="firstName"
        placeholder="firstName (required)"
      />
    <Input
        value={this.state.lastName}
        onChange={this.handleInputChange}
        name="lastName"
        placeholder="lastName (required)"
      />
<label>Yes</label>
<input type="radio" name="plusOne" value="yes" />
<br />
<label>Yes</label>

<input type="radio" name="plusOne" value="No" />


<input type="radio" name="Attending" value="yes" />
<input type="radio" name="Attending" value="No" />      


      <TextArea
        value={this.state.Memories}
        onChange={this.handleInputChange}
        name="Memories"
        placeholder="Synopsis (Optional)"
      />
      <FormBtn
        disabled={!(this.state.author && this.state.title)}
        onClick={this.handleFormSubmit}
      >
        Submit Invite
      </FormBtn>
    </form>
    )
  }         
}

export default Form;

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const GuestSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   plusOne: { type: boolean, required: true },
//   memories: {type: String, required: false},
//   attending: {type: boolean, required:true},
//   event: { type:Schema.Types.ObjectId, ref: 'Event'}
// });

// const Guest = mongoose.model("Guest", GuestSchema);

// module.exports = Guest;