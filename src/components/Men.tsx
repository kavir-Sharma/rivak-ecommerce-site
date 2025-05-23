import React from 'react';

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface MenProps {
  darkMode: boolean;
}

const Men: React.FC<MenProps> = ({ darkMode }) => {
  const cards: CardData[] = [
    {
      image: '/assets/men1.jpg',
      title: 'RIVAK ONE',
      description: 'High-performance everyday sneaker.',
    },
    {
      image: '/assets/men2.jpg',
      title: 'RIVAK TWO',
      description: 'Elegant leather loafers for any occasion.',
    },
    {
      image: '/assets/men3.jpg',
      title: 'RIVAK THREE',
      description: 'Polished shoes for business or events.',
    },
    {
      image: '/assets/men4.jpg',
      title: 'RIVAK FOUR',
      description: 'Lightweight white casual shoes.',
    },
    {
      image: '/assets/men5.jpg',
      title: 'RIVAK FIVE',
      description: 'Bold streetwear-inspired design.',
    },
    {
      image: '/assets/men6.jpg',
      title: 'RIVAK SIX',
      description: 'Durable boots for outdoor adventures.',
    },
  ];

  return (
    <section id="men" className={`product-section ${darkMode ? 'dark' : ''}`}>
      <h1 className="product-title">Men</h1>
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

export default Men;
