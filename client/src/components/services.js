import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
const ServicesOffered = [
  {
    title: "Weddings",
    description: "We design personal and unique experiences that are carefully crafted to reflect a one-of-a-kind love that the couple shares.",
    icon: "fas fa-heart"
  },
  {
    title: "Baby Showers",
    description: "Baby showers are a time for families to get together to celebrate the newest member coming into the family.",
    icon: "fas fa-child"
  },
  {
    title: "Anniversary Parties",
    description: (
      <span>
       As you celebrate the commitment of love and marriage, let us help plan your party.  Big or small, we do it all!
      </span>
    ),
    icon: "fas fa-gift"
  },
  {
    title: "Birthday Parties",
    description: "Whether it's a big celebration or just a small birthday gathering, let us plan your next party.",
    icon: "fas fa-birthday-cake"
  }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          {/* <h3 className="text-secondary mb-0"></h3> */}
          <h2 className="mb-5">Services We Specialize In</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className={service.icon} />
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
