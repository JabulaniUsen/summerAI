import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import './App.css';
import DemoApp from './components/DemoApp';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        
        <Hero />
        <DemoApp />
      </div>
    </main>
  );
};

export default App;
