import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p>&copy; {currentYear} <a href="#admin">Maciej Leoniak</a>. No rights reserved.</p>
    </footer>
  )
}

export default Footer
