import React, { Component } from "react";
import API from "../utils/api";
// import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/eventform";
import { Col, Row, Container } from "../components/grid";




class Event extends Component {
  state = {
    eventName: "",
    host: "",
    type: "",
    description: "",
    // plusOne: "",
    formSubmitted:false
  };






  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = () => {
    API.getEvents()
      .then(res =>
        this.setState({ events: res.data, eventName: "", host: "" })
      )
      .catch(err => console.log(err));
  };

  deleteEventt = id => {
    API.deleteEvent(id)
      .then(res => this.loadEvents())
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
    if (this.state.EventName && this.state.host) {
      API.saveEvent({
        eventName: this.state.eventName,
        host: this.state.host,
        tpye: this.state.type,
        description: this.state.description,
        
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
        <Col size="md-6">
        {!this.state.formSubmitted ? 
      <form>
        <Input
          value={this.state.eventName}
          onChange={this.handleInputChange}
          name="eventName"
          placeholder="Event Name (required)"
        />
        <Input
          value={this.state.host}
          onChange={this.handleInputChange}
          name="host"
          placeholder="host (required)"
        />


        Deposit Made?
<br />
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="attending" value="true" />

        <label>no</label>
        <input onChange={this.handleInputChange} type="radio" name="attending" value="false" />
        <br />


        Deposit Needed?
<br />
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="plusOne" value="true" />

        <label>no</label>
        <input onChange={this.handleInputChange} type="radio" name="plusOne" value="false" />
        <br />

        Notes or requests made by host.
<br />



        <TextArea
          value={this.state.description}
          onChange={this.handleInputChange}
          name="notes"
          placeholder="Notes?"
        />

       
<br />

        <FormBtn
          disabled={!(this.state.eventName && this.state.host)}
          onClick={this.handleFormSubmit}
        >
          Submit Event
      </FormBtn>
      </form>
      : " Thank you" }
      </Col>
        </Row>
      </Container>
    )
  }
}

export default Event;