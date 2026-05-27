import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
     <div className="footer-left">
    <Link to="/" className="footer-link">
      © {new Date().getFullYear()} Water Bottle Tracker System
    </Link>{" "}
    | All Rights Reserved
  </div>

      <a
        href="https://aptechsolutions.io/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Aptech Solutions website"
        className="footer-company"
      >
        <img
          src="logo.png"
          alt="Aptech Solutions Logo"
          className="company-logo"
          loading="lazy"
        />
      </a>
    </footer>
  );
};

export default Footer;
