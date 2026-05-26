const Footer = () => {
  return (
    <footer className="footer">
      ©
      <span className="footer-gap">
        {new Date().getFullYear()}
      </span>

      <a href="http://localhost:5173/" className="footer-gap">
        Water Bottle Tracker System
      </a>
      | All Rights Reserved
    </footer>
  );
};

export default Footer;