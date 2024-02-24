import '../../assets/css/ContactUs.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
// import { MdEmail, MdPhone } from 'react-icons/md';


const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="info">
          <FaEnvelope className="icon" />
          <span>Email: example@example.com</span>
        </div>
        <div className="info">
          <FaPhone className="icon" />
          <span>Phone: +1 123 456 7890</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
