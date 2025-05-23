import React from 'react';

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface KidsProps {
  darkMode: boolean;
}

const Kids: React.FC<KidsProps> = ({ darkMode }) => {
  const cards: CardData[] = [
    {
      image: '/assets/kids1.jpg',
      title: 'RIVAK FUN RUN',
      description: 'Bright and durable sneakers for kids on the go.',
    },
    {
      image: '/assets/kids2.jpg',
      title: 'RIVAK PLAY',
      description: 'Comfortable shoes perfect for playground fun.',
    },
    {
      image: '/assets/kids3.jpg',
      title: 'RIVAK SCHOOL',
      description: 'Smart shoes ideal for school days.',
    },
    {
      image: '/assets/kids4.jpg',
      title: 'RIVAK SPORT',
      description: 'Active wear shoes for energetic kids.',
    },
    {
      image: '/assets/kids5.jpg',
      title: 'RIVAK SANDALS',
      description: 'Lightweight sandals for sunny days.',
    },
    {
      image: '/assets/kids6.jpg',
      title: 'RIVAK WARM',
      description: 'Cozy boots designed for chilly weather.',
    },
  ];

  return (
    <section id="kids" className={`product-section ${darkMode ? 'dark' : ''}`}>
      <h1 className="product-title">Kids</h1>
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

export default Kids;
