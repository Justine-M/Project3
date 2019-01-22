import React, {Component}  from "react";
// import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/stylish-portfolio.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import AboutSection from "../components/about";
import ServicesSections from "../components/services";
import CalloutSection from "../components/callout";
import PortfolioSection from "../components/portfolio";
import TodoApp from "../components/toDo";
// import CallToAction from "../components/callToAction";
import MapSection from "../components/map";
import FooterSection from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import API from "../utils/api";


class FullApp extends Component {

    state = {
        user:""
    }
  componentDidMount(){
this.getUser();
  }
  getUser = () =>{
      API.getLoggedInUser().then((data) => {
console.log(data.data.email);
this.setState({user:data.data.email})
      })
         
    
  }  
  render() {
    return (
      <div>
        <Sidebar loggedIn = {this.state.user} />
        <Header />
        <AboutSection />
        <ServicesSections />
        <CalloutSection />
        <PortfolioSection />
        <TodoApp />
        {/* <CallToAction /> */}
        {/* <FormPage /> */}
        <MapSection />
        <FooterSection />
        <ScrollToTop />
        {/* <Route exact path="/Login" component={Login} /> */}
      </div>
    );
  }
}

export default FullApp;