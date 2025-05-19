import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

interface Shoe {
  image: string;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const shoes: Shoe[] = [
    {
      image: '/assets/shoe1.jpg',
      title: 'RIVAK Runner',
      description: 'Lightweight running shoes for daily jogging.',
    },
    {
      image: '/assets/shoe2.jpg',
      title: 'RIVAK Classic',
      description: 'Classic style casual shoes for all occasions.',
    },
    {
      image: '/assets/shoe3.jpg',
      title: 'RIVAK Trek',
      description: 'Durable trekking shoes for your adventure.',
    },
  ];

  return (
    <div className={`container${darkMode ? ' dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="main" id="home">
        <section className="product-section">
          {shoes.map((shoe, index) => (
            <Card
              key={index}
              image={shoe.image}
              title={shoe.title}
              description={shoe.description}
              darkMode={darkMode}
            />
          ))}
        </section>
      </main>

      <section className="section about-section" id="about">
        <h2>About RIVAK</h2>
        <p>
          RIVAK Shoes is dedicated to delivering premium quality footwear combining comfort,
          style, and durability. Whether you need running shoes, casual wear, or trekking boots,
          RIVAK has you covered.
        </p>
      </section>

      <section className="section contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:support@ravikshoes.com">support@ravikshoes.com</a>
        </p>
        <p>
          Phone: <a href="tel:+12345678901">+1 234 567 8901</a>
        </p>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
