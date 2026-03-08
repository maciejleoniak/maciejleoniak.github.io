import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import TechStack from './components/TechStack'
import Carousel from './components/Carousel'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Load dark mode state from localStorage
    try {
      const savedDarkMode = localStorage.getItem('darkMode')
      if (savedDarkMode === 'enabled') {
        setIsDarkMode(true)
        document.body.classList.add('dark-mode')
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }, [])

  useEffect(() => {
    // Handle hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    try {
      if (!isDarkMode) {
        document.body.classList.add('dark-mode')
        localStorage.setItem('darkMode', 'enabled')
      } else {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('darkMode', 'disabled')
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    }
  }

  return (
    <div className="app">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Intro />
            <TechStack />
            <Carousel />
          </>
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : null}
      </main>
      <Footer />
    </div>
  )
}

export default App
