import React, { Component } from "react";
import API from "../utils/api";
// import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/form";
import { Col, Row, Container } from "../components/grid";




class Form extends Component {
  state = {
    guests: [],
    firstName: "",
    lastName: "",
    attending: "",
    plusOne: ""
  };






  componentDidMount() {
    this.loadGuests();
  }

  loadGuests = () => {
    API.getGuests()
      .then(res =>
        this.setState({ guests: res.data, firstName: "", lastName: "", plusOne: "", attending: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGuest = id => {
    API.deleteGuest(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName) {
      API.saveGuest({
        Name: this.state.firstName,
        Attending: this.state.attending,
        Friend: this.state.plusOne
      })
        .then(res => this.loadGuests())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-6">
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
<br />
        <label>Yes</label>
        <input type="radio" name="attending" value="yes" />

        <label>no</label>
        <input type="radio" name="attending" value="no" />
        <br />


        Will you be bringing a guest?
<br />
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
<br />
        <input type="file" />

        <FormBtn
          disabled={!(this.state.firstName && this.state.lastName)}
          onClick={this.handleFormSubmit}
        >
          Submit Invite
      </FormBtn>
      </form>
      </Col>
        </Row>
      </Container>
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