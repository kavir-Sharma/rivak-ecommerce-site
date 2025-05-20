import React, { useState } from 'react';
import SignupForm from './Signup';
import LoginForm from './Login';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const toggleSignup = () => {
    setShowSignup((prev) => !prev);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin((prev) => !prev);
    setShowSignup(false);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setShowLogin(false);
    setShowSignup(false);
  };

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

        {loggedInUser ? (
          <div className="user-info">
            <span className="welcome">Welcome, {loggedInUser.split('@')[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>

          </div>
        ) : (
          <div className="auth-buttons">
            <button onClick={toggleSignup}>Signup</button>
            <button onClick={toggleLogin}>Login</button>
          </div>
        )}

        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
      </div>

      {showSignup && !loggedInUser && (
        <div className="auth-dropdown">
          <SignupForm />
        </div>
      )}

      {showLogin && !loggedInUser && (
        <div className="auth-dropdown">
          <LoginForm onLoginSuccess={(email) => {
            setLoggedInUser(email);
            setShowLogin(false);
          }} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
