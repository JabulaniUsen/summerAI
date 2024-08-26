import Hero from './components/Hero'
import './App.css'
import DemoApp from './components/DemoApp'

const App = () => {
  return (
    <main>
      <div className="main">
        <div className='gradient' />
      </div>

      <div className="app">
        <Hero/>
        <DemoApp/>
      </div>
    </main>
  )
}

export default App