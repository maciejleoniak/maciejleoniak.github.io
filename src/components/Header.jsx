import './Header.css'

function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">ML</a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button 
          id="darkModeToggle" 
          onClick={onToggleDarkMode}
          aria-label="Toggle dark mode"
          className="theme-toggle"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}

export default Header
