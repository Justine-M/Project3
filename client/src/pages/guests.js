import React, { Component } from "react";
import API from "../utils/api";
// import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/form";
import { Col, Row, Container } from "../components/grid";
import guestjumbotron from"../components/guestjumbotron";



class Guest extends Component {
  state = {
    guests: [],
    firstName: "",
    lastName: "",
    attending: "",
    plusOne: "",
    formSubmitted:false
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
      .then(res => this.loadguests())
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
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        plusOne: this.state.plusOne,
        attending: this.state.attending,
        
      })
        .then(
          (res) =>{
            console.log(res);
            console.log("hit the return")
            this.setState({formSubmitted: true})
          }
        )
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-10">
        <div className="gtron">
        <guestjumbotron>
              {/* <h2><strong>Accept or decline this invitation by completing form</strong></h2><br/> */}
            </guestjumbotron>
            </div>
        {!this.state.formSubmitted ? 
      <form>
        <Input
          value={this.state.firstName}
          onChange={this.handleInputChange}
          name="firstName"
          placeholder="First Name (required)"
        />
        <Input
          value={this.state.lastName}
          onChange={this.handleInputChange}
          name="lastName"
          placeholder="Last Name (required)"
        />



<h5 className="mb-4">Will you be attending?</h5>     
<ul>
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="attending" value="true" /><br/>

        <label>No</label>
        <input onChange={this.handleInputChange} type="radio" name="attending" value="false" />
        <br />
        </ul>


<h5 className="mb-4">Will you be bringing a guest</h5>
<ul>
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="plusOne" value="true" /><br/>

        <label>no</label>
        <input onChange={this.handleInputChange} type="radio" name="plusOne" value="false" />
        <br />
        </ul>

        <h5 className="mb-4">Please Choose menu options for you and your Guest (if applicable)</h5>
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

        <h5>Please attach any images you want to share of the bride and Groom.</h5>
<br />
        <input type="file" />

        <FormBtn
          disabled={!(this.state.firstName && this.state.lastName)}
          onClick={this.handleFormSubmit}
        >
          Submit Invite
      </FormBtn>
      </form>
      : " Thank you" }
      </Col>
        </Row>
      </Container>
    )
  }
}

export default Guest;

