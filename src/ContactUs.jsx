import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center mb-4">Contact Us</h2>

      {submitted && (
        <div className="alert alert-success text-center">
          Thank you for reaching out! We'll get back to you soon.
        </div>
      )}

      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h4 className="text-secondary">Our Contact Details</h4>
          <p>
            <strong>Address:</strong> 123 Main Street, vijayawada, India
          </p>
          <p>
            <strong>Email:</strong> support@onlineGrocery.com
          </p>
          <p>
            <strong>Phone:</strong> 9533271545
          </p>
          <p className="text-muted">We respond within 24 hours!</p>
          <p><FontAwesomeIcon icon={faFacebook}/>&nbsp;
           <FontAwesomeIcon icon={faInstagram}/>&nbsp;
            <FontAwesomeIcon icon={faYoutube} /> - @OnlineGrocery</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
