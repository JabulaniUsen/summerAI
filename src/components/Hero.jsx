import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.ico';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdSunny } from 'react-icons/md';

const Hero = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      setIsSpinning(false);
    }, 500); // Match the spin duration in the CSS
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10">
        <img src={logo} alt="summer_ai_logo" className="lg:w-10 w-9 object-contain mt-3" />
        <div className="flex items-center gap-6">
          <button
            type="button"
            className={`text-3xl ${isSpinning ? 'spin' : ''}`}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <BsFillMoonStarsFill /> : <MdSunny />}
          </button>
          <button
            type="button"
            className="black_btn"
            onClick={() => window.open('https://usen-obong.vercel.app/')}
          >
            Don't click!
          </button>
        </div>
      </nav>
      <h1 className="head_text">
        Summerize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Summer AI</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with SummerAI, an AI-powered
        summerizer that transforms lengthy articles into
        clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
