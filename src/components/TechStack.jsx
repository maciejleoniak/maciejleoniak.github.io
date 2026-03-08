import './TechStack.css'

function TechStack() {
  const technologies = [
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Cypress', category: 'Testing' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Git', category: 'Tools' },
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
            <div className="tech-category">{tech.category}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
