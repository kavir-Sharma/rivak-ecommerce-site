import React from 'react';
import '../index.css';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section className={`about-section ${darkMode ? 'dark' : ''}`} id="about">
      <h2 className="about-heading">About RIVAK</h2>
      <p className="about-subheading">Designed for comfort. Built for performance.</p>
      <p className="about-text">
        At RIVAK, we believe shoes are more than just a fashion statement — they're an extension of your lifestyle.
        Whether you're running, hiking, or just exploring the streets, our shoes combine quality craftsmanship, stylish design, and innovative comfort technology to keep you moving.
      </p>
      <ul className="about-features">
        <li> Breathable and lightweight materials</li>
        <li> Designed for active lifestyles</li>
        <li> Eco-friendly production process</li>
      </ul>
      <img src="/assets/rivak-logo.png" alt="Our Team" className="about-image" />
    </section>
  );
};

export default About;
