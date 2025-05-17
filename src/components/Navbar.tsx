import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark-nav' : ''}`}>
      <div className="logo">
        <img src="/assets/rivak-logo.png" alt="RIVAK Logo" className="logo-img" />
        <span className="brand-name">RIVAK</span>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="auth-buttons">
          <button>Login</button>
          <button>Signup</button>
        </div>

        {/* Dark Mode Switch */}
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
