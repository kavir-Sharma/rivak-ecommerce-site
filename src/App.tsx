import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  return (
    <div className={`container${darkMode ? ' dark' : ''}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
       <Men darkMode={darkMode} /> 
       <Women darkMode={darkMode} /> 
       <Kids darkMode={darkMode} /> 
       <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
