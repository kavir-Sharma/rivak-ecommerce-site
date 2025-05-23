import React from 'react';

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface WomenProps {
  darkMode: boolean;
}

const Women: React.FC<WomenProps> = ({ darkMode }) => {
  const cards: CardData[] = [
    {
      image: '/assets/women1.jpg',
      title: 'RIVAK ELEGANCE',
      description: 'Chic heels designed for comfort and style.',
    },
    {
      image: '/assets/women2.jpg',
      title: 'RIVAK CASUAL',
      description: 'Everyday flats perfect for casual outings.',
    },
    {
      image: '/assets/women3.jpg',
      title: 'RIVAK SPORTY',
      description: 'Lightweight sporty shoes for active days.',
    },
    {
      image: '/assets/women4.jpg',
      title: 'RIVAK CLASSIC',
      description: 'Timeless designs with premium materials.',
    },
    {
      image: '/assets/women5.jpg',
      title: 'RIVAK BOHO',
      description: 'Bohemian inspired sandals for a free spirit.',
    },
    {
      image: '/assets/women6.jpg',
      title: 'RIVAK WINTER',
      description: 'Warm and cozy boots for cold seasons.',
    },
  ];

  return (
    <section id="women" className={`product-section ${darkMode ? 'dark' : ''}`}>
      <h1 className="product-title">Women</h1>
      <div className="product-grid">
        {cards.map((card, index) => (
          <div key={index} className="product-card">
            <img src={card.image} alt={card.title} className="product-image" />
            <h2 className="product-card-title">"{card.title}"</h2>
            <p className="product-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Women;
