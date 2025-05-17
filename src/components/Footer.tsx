import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark-footer' : ''}`}>
      &copy; {new Date().getFullYear()} RIVAK Shoes. All rights reserved.
    </footer>
  );
};

export default Footer;
