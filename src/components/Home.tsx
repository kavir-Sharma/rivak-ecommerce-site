import React, { useState, useEffect, useCallback } from 'react';
import '../index.css'; 

interface Slide {
  src: string;
  title: string;
  description: string;
}

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const images: Slide[] = [
    { src: '/assets/shoe1.jpg', title: 'Stylish Sneakers For Women', description: 'Comfort meets fashion in every step.' },
    { src: '/assets/shoe2.jpg', title: 'Classic Runners For Men', description: 'Perfect for your daily run.' },
    { src: '/assets/shoe3.jpg', title: 'Urban Boots For Kids', description: 'Stay rugged, stay classy.' },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleAddToCart = (item: Slide) => {
    console.log(`Added to cart: ${item.title}`);
  };

  return (
    <div className={`slider-container${darkMode ? ' dark' : ''}`}>
      {images.map((slide, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <div className="slide-content">
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="cart-button" onClick={() => handleAddToCart(slide)}>
                 Add to Cart
              </button>
            </div>
            <div className="slide-image">
              <img src={slide.src} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}

      <button aria-label="Previous Slide" className="nav-button left" onClick={prevSlide}>
        ❮
      </button>
      <button aria-label="Next Slide" className="nav-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Home;
