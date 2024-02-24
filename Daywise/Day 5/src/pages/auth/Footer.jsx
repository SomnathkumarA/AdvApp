// Footer.js


import '/src/assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>We are a team of developers passionate about creating useful and innovative solutions.</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-row">
          <p className="footer-text">© 2022 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;