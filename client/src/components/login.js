import React, {Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import API from "../utils/API";

class FormPage extends Component {

  // class Books  {
    state = {
      email: "",
      password: "",
      registerMode: false,
    };
  
    componentDidMount(){
      // this.loadEmail();
    };
  
    // loadEmail = () => {
    //   API.getEmail()
    //     .then(res =>
    //       this.setState({ email: "", password: "" })
    //     )
    //     .catch(err => console.log(err));
    // };
  
    // deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.email && this.state.password) {

        if(this.state.registerMode){

          API.registerUser({
            email: this.state.email,
            password: this.state.password,
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));

        }else{
        
        API.logInUser({
          email: this.state.email,
          password: this.state.password,
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  }
      
    render() {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>

              <MDBInput
              value={this.state.email}
              onChange={this.handleInputChange}
                label="Your email"
                group
                type="email"
                name="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
              value={this.state.password}
              onChange={this.handleInputChange}
                label="Your password"
                group
                name="password"
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                >
                 {this.state.registerMode ? "Register" : "Sign in"} 
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon icon="facebook" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon icon="google-plus" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1" onClick = {() =>{this.setState({registerMode:true})}}>

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}
export default FormPage;
