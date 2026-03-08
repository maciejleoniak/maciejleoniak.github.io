import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/maciejleoniak" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/maciej-leoniak-90a1a926b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:leoniak.maciek1@gmail.com" aria-label="Email">
            Email
          </a>
        </div>
        <p className="footer-copyright">&copy; {currentYear} <a href="#home">Maciej Leoniak</a>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
