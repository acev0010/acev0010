import React from "react";
import "./contact.css"; // Import the CSS file
import { FaCopy } from "react-icons/fa"; // Import the copy icon
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Contact = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="section__title mt-5 mb-5" id="contact">
        <span className="bordered">CONTACT</span>
      </h2>
      <div className="centered-container mb-5">
        <h2 className="align-top">My information</h2>
        <div className="contact-info mt-4">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <span className="contact-text">
              <a href="mailto:isabelacevedo2000@hotmail.com">
                isabelacevedo2000@hotmail.com
              </a>
            </span>
            <FaCopy
              className="copy-icon"
              onClick={() => handleCopy("isabelacevedo2000@hotmail.com")}
            />
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <span className="contact-text">
              <a href="tel:3434630656">3434630656</a>
            </span>
            <FaCopy
              className="copy-icon"
              onClick={() => handleCopy("3434630656")}
            />
          </div>
          <div className="contact-item">
            <span className="contact-label">Country:</span>
            <span className="contact-text">ON, Ottawa</span>
          </div>
        </div>

        {/* Form */}
        <form
          className="contact-form mt-4"
          action="https://formspree.io/f/xblrroyp"
          method="POST"
        >
          <div className="row">
            <h2 className="align-top">Contact Me</h2>
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send
          </button>
        </form>
        <div data-aos="fade-right">
          <img src="/images/meerkat.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
