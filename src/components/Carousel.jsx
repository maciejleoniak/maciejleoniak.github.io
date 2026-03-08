import './Carousel.css'

function Carousel() {
  const technologies = [
    {
      name: 'HTML5',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      alt: 'HTML5 logo'
    },
    {
      name: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg',
      alt: 'JavaScript logo'
    },
    {
      name: 'Cypress',
      logo: 'https://asset.brandfetch.io/idIq_kF0rb/idZxkJkFIi.svg?updated=1667565307270',
      alt: 'Cypress logo'
    },
    {
      name: 'Python',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Python_logo_and_wordmark.svg',
      alt: 'Python logo'
    },
    {
      name: 'Pytest',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Pytest_logo.svg',
      alt: 'Pytest logo'
    },
    {
      name: 'Selenium',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Selenium_logo.svg',
      alt: 'Selenium logo'
    },
    {
      name: 'Playwright',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Playwright_Logo.svg',
      alt: 'Playwright logo'
    },
    {
      name: 'ChatGPT',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png',
      alt: 'ChatGPT logo'
    }
  ]

  return (
    <div id="carousel-container">
      <div className="slider">
        <div className="slide-track">
          {/* First set */}
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="slide">
              <img src={tech.logo} alt={tech.alt} />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech, index) => (
            <div key={`second-${index}`} className="slide">
              <img src={tech.logo} alt={tech.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
