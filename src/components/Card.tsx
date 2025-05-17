import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  darkMode: boolean;
}

const Card: React.FC<CardProps> = ({ image, title, description, darkMode }) => {
  return (
    <div className={`card ${darkMode ? 'dark-card' : ''}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
