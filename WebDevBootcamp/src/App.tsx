import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <main aria-label="Portfolio">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App
