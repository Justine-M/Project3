import React, { Component } from "react";
import API from "../utils/api";
// import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../components/eventform";
import { Col, Row, Container } from "../components/grid";




class Eevent extends Component {
  state = {
    eventName: "",
    host: "",
    type: "",
    description: "",
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

  deleteEvent = id => {
    API.deleteEvent(id)
      .then(res => this.loadevents())
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
        type: this.state.type,
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
        <Col size="md-12">
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


<h5 className="mb-4">Deposit Made</h5>
<ul>
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="type" value="true" /><br />

        <label>No</label>
        <input onChange={this.handleInputChange} type="radio" name="type" value="false" />
        <br />
        </ul>

        <h5 className="mb-4">Date Chosen</h5>
<ul>
        <label>Yes</label>
        <input onChange={this.handleInputChange} type="radio" name="description" value="true" /><br/>

        <label>No</label>
        <input onChange={this.handleInputChange} type="radio" name="description" value="false" />
        <br />
        </ul>

      
        
        <TextArea
          value={this.state.notes}
          onChange={this.handleInputChange}
          name="notes"
          placeholder="Notes and Special Requests"
        />
        

       
<br />

        <FormBtn
          disabled={!(this.state.eventName && this.state.host)}
          onClick={this.handleFormSubmit}
        >
          Submit Event Data
      </FormBtn>
      </form>
      : " Event Data Submitted" }
      </Col>
        </Row>
      </Container>
    )
  }
}

export default Eevent;