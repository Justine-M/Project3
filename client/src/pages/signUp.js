import React, {Component} from "react";
// import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/stylish-portfolio.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import Sidebar from "./components/sidebar";
// import Header from "./components/header";
// import AboutSection from "./components/about";
// import ServicesSections from "./components/services";
// import CalloutSection from "./components/callout";
// import PortfolioSection from "./components/portfolio";
// import CallToAction from "./components/callToAction";
// import MapSection from "./components/map";
// import FooterSection from "./components/footer";
// import ScrollToTop from "./components/scrollToTop";
import FormPage from "../components/login";


class SignUp extends Component {
  render() {
    return (
      <div>
        {/* <Sidebar />
        <Header />
        <AboutSection />
        <ServicesSections />
        <CalloutSection />
        <PortfolioSection />
        <CallToAction /> */}
        <FormPage />
        {/* <MapSection />
        <FooterSection />
        <ScrollToTop /> */}
        {/* <Route exact path="/Login" component={Login} /> */}
      </div>
    );
  }
}

export default SignUp;