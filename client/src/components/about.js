import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const AboutSection = () => (
  <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>
            <strong>What Makes MSJ Experience Stand Out From The Rest?</strong>
            </h1>
            <p className="lead mb-5">
            <strong>Our methods of planning and styling events are simple. We take your vison and make it come alive to ensure we create a seamless and elegant event!</strong>
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#services"
            >
              <strong>What We Offer</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default AboutSection;
