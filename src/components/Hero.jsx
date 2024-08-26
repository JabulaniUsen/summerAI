import React from 'react'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10'>
        <img src={logo} alt="summer_ai_logo" className='w-28 object-contain mt-3' />
        <button
          type='button'
          className='black_btn'
          // onClick={() => {window.open('')}}
          >
          Get Started
        </button>
      </nav>
      <h1 className='head_text'>
        Summerize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>Summer AI</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with SummerAI, an AI powered
        summerizer that transforms lengthy articles into
        clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero