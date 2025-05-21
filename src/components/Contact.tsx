import React from 'react';
import '../index.css';
interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <section className={`contact-section ${darkMode ? 'dark' : ''}`} id="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subheading">We’d love to hear from you!</p>

      <div className="contact-details">
        <p> Phone: <a href="tel:+9779812345678">+977 9812345678</a></p>
        <p> Email: <a href="mailto:info@rivakshoes.com">info@rivakshoes.com</a></p>

        <div className="social-icons">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer"> Facebook</a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer"> Instagram</a>
          <a href="https://wa.me/9779812345678" target="_blank" rel="noreferrer"> WhatsApp</a>
          <a href="https://tiktok.com/@yourpage" target="_blank" rel="noreferrer"> TikTok</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
