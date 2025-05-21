import React, { useState, useEffect, useCallback } from 'react';
import '../index.css';

interface Slide {
  src: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  images: Slide[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]); // ✅ Fixed: added nextSlide as dependency

  return (
    <div className="slider-container">
      {images.map((slide, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <div className="slide-content">
            <div className="slide-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <div className="slide-image">
              <img src={slide.src} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}

      <button className="nav-button left" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-button right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
