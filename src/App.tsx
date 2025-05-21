import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const shoes = [
    {
      src: '/assets/shoe1.jpg',
      title: 'RIVAK RUNNER FOR WOMEN',
      description: 'Lightweight running shoes for daily use.',
    },
    {
      src: '/assets/shoe2.jpg',
      title: 'RIVAK ClASSIC FOR MEN',
      description: 'Classic style casual shoes for all occasions.',
    },
    {
      src: '/assets/shoe3.jpg',
      title: 'RIVAK STYLISH FOR KIDS',
      description: 'Durable  shoes for your new adventure.',
    },
  ];

  return (
    <div className={`container${darkMode ? ' dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ImageSlider images={shoes} />
      <About darkMode={darkMode} />
       <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
