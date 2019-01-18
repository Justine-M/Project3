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


Will you be attending?
<br/>     
<label>Yes</label>
<input type="radio" name="Attending" value="yes" />

<label>no</label>
<input type="radio" name="Attending" value="no" />
<br />


Will you be bringing a guest?
<br/>   
<label>Yes</label>
<input type="radio" name="plusOne" value="yes" />

<label>no</label>
<input type="radio" name="plusOne" value="no" />
<br />

Please Choose menu options for you and your Guest (if applicable)
<br />
<select>
  <option value="Chicken">Chicken</option>
  <option value="Fish">Fish</option>
  <option selected value="Menu">Menu</option>
  <option value="Vegetarian">Vegetarian</option>
</select>

<select>
  <option value="Chicken">Chicken</option>
  <option value="Fish">Fish</option>
  <option selected value="Menu">Menu</option>
  <option value="Vegetarian">Vegetarian</option>
</select>



      <TextArea
        value={this.state.Memories}
        onChange={this.handleInputChange}
        name="Memories"
        placeholder="Are there any special memories or kind words you want to share with the bride and groom?"
      />

      Please attache any images you want to share of the bride and Groom.
<br/>
      <input type="file" />
      
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