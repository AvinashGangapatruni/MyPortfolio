import React, { useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const res = await response.json();
  
      if (res.success) {
        console.log("Success:", res);
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error:", res);
        alert(`Failed to send: ${res.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p className="justify">
          If you have any questions, suggestions, or want to contact, feel free
          to reach out!
        </p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p className="justify">
                    4-97, Near Post Office, Main Road, Tallarevu.
                  </p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-globe flex-shrink-0"></i>
                <div>
                  <h3>Website</h3>
                  <p>https://mywebsite.com</p>
                </div>
              </div>
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>avinashgangapatruni27@gmail.com</p>
                </div>
              </div>
              <iframe
                title="Avinash's Point"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.9297227176457!2d82.22681036747446!3d16.78017168631917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382010e22c78a1%3A0xb9077473a5dd2b05!2sTallarevu%20Post%20Office!5e0!3m2!1sen!2sin!4v1740066759902!5m2!1sen!2sin"
                className="map-iframe"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <form
              className="php-email-form"
              onSubmit={onSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="6fe34363-6c6c-4ce4-99ef-5f80151f1e5f"
              />
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    id="message-field"
                    required
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" aria-label="Send Message">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
