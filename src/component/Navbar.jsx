import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
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
      </div>
    </nav>
  );
}

export default Navbar;
