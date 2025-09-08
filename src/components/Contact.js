import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo - integrate with your preferred email service)");
  };

  return (
    <section id="contact" className="contact animate-on-scroll">
      <div className="container">
        <h2>Get In Touch</h2>
        <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <a
  href="mailto:rijitbanerjeejaduniv@gmail.com"
  className="btn"
>
  Send Message
</a>

      </div>
    </section>
  );
};

export default Contact;
