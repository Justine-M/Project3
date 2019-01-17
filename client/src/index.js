import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


import Sidebar from "./components/sidebar";
import Header from "./components/header";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import CalloutSection from "./components/callout";
import PortfolioSection from "./components/portfolio";
import CallToAction from "./components/callToAction";
import MapSection from "./components/map";
import FooterSection from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import FormPage from "./components/login";
import TodoApp from "./components/toDo";
import Guests from "./pages/guests";


class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <AboutSection />
        <ServicesSections />
        <CalloutSection />
        <PortfolioSection />
        <CallToAction />
        <FormPage />
        <TodoApp />
        <MapSection />
        <FooterSection />
        <ScrollToTop />
        <Guests/>
        {/* <Route exact path="/Login" component={Login} /> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
