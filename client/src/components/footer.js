import React from "react";
const socialSites = [
  {
    link: "https://www.facebook.com/MSJ-Events-235998867278156/?modal=admin_todo_tour",
    icon: "icon-social-facebook"
  },
  {
    link: "https://twitter.com/ExperienceMsj",
    icon: "icon-social-twitter"
  },
  {
    link: "https://www.instagram.com/amor__decor/",
    icon: "fab fa-instagram"
  },
  {
    link: "mailto:TheMSJExperience@gmail.com",
    icon: "fab fa-google-plus"
  }
];
const FooterSection = () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className="text-muted small mb-0">2018
          MSJExperience.com
      </p>
    </div>
  </footer>
);
export default FooterSection;
