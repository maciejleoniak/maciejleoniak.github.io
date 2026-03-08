import './TechStack.css'

function TechStack() {
  const technologies = [
    { name: 'HTML/CSS' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'Git' },
    { name: 'Cypress' },
    { name: 'Selenium' },
    { name: 'Playwright' },
    { name: 'AI' },
  ]

  return (
    <section className="content-section tech-section" id="tech-stack">
      <h2>My Tech Stack</h2>
      <p>Each product is unique, with its own set of business requirements and challenges. To meet these diverse needs, I employ a diverse technology stack.</p>
      <p>This approach enables me to customize solutions effectively, ensuring that each product has the appropriate technological foundation in test automation.</p>
      
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-name">{tech.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
