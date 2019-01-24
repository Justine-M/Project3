import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const portfolioItems = [
  {
    imgSrc: "./img/portfolio-1.jpg",
    heading: "Weddings",
    description: "The heart of our business is love and helping people in love gives us the most joy out of the whole wedding experience!"
  },
  {
    imgSrc: "./img/portfolio-2.jpg",
    heading: "Baby Showers",
    description:
      "What better way to welcome a new bundle of joy than with an elegant gender reveal and/or baby shower."
  },
  {
    imgSrc: "./img/portfolio-3.jpg",
    heading: "Birthday Parties",
    description:
      "Looking to have that very special 1st birthday party for your prince or princess?  Or looking to show the world that 40 is the new 20?  Let us help you plan and celebrate your day."
  },
  {
    imgSrc: "./img/portfolio-4.jpg",
    heading: "Anniversary Parties",
    description:
      "Whether it's your 1st year, 50th year or somewhere in between, that deserves commendation.  We can help with that."
  }
];
const PortfolioSection = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Check Out Some Of Our Recent Events</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item">
                <span className="caption">
                  <span className="caption-content">
                    <h2><strong>{project.heading}</strong></h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default PortfolioSection;
