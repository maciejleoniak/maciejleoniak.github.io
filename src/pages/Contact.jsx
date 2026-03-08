import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Feel free to reach out to me. I'm always open to new opportunities and interesting projects.</p>
        </div>

        <div className="contact-grid">
          {/* Email */}
          <a href="mailto:leoniak.maciek1@gmail.com" className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>leoniak.maciek1@gmail.com</p>
            <span className="contact-cta">Send Email</span>
          </a>

          {/* GitHub */}
          <a href="https://github.com/maciejleoniak" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">🐙</div>
            <h3>GitHub</h3>
            <p>github.com/maciejleoniak</p>
            <span className="contact-cta">Visit GitHub</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/maciej-leoniak-90a1a926b" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Maciej Leoniak</p>
            <span className="contact-cta">Visit LinkedIn</span>
          </a>
        </div>

        <div className="contact-footer">
          <p>Looking forward to connecting with you!</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
