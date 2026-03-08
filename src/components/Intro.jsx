import './Intro.css'

function Intro() {
  return (
    <section className="intro-section" id="home">
      <div className="intro-text">
        <h1>Welcome to My Website</h1>
        <p>My journey in the world of technology began with a fascination for how software can transform ideas into reality.</p>
        <p>Over the years, I've honed my skills in various aspects of software testing, from manual testing to automated test script development. My expertise lies in designing and executing comprehensive test plans that ensure the reliability, performance, and security of software applications.</p>
      </div>
      <img 
        src="https://raw.githubusercontent.com/maciejleoniak/maciejleoniak.github.io/main/assets/images/avatar.JPG" 
        loading="lazy" 
        alt="Maciej Leoniak Avatar" 
        className="avatar" 
      />
    </section>
  )
}

export default Intro
