import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from "./components/Hero";
import ProjectCard from './components/ProjectCard';

const projects = [
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: "A user can play a game of Tic Tac Toe with the computer and choose whether they want to play as X or O. The game will reset as soon as it's over. Built using: Javascript, jQuery, HTML, CSS3, and Bootstrap.",
    href: "https://maribelduran.github.io/tic-tac-toe/"
  },
  {
    id: "ask-me",
    title: "Ask Me",
    description: "Students are welcomed to ask me questions about programming, my career, or hobbies. They can submit their questions through the contact form or embedded Padlet board.",
    href: "https://maribelduran.github.io/ask-me/"
  },
  {
    id: "inspirational-quotes-generator",
    title: "Inspirational Quotes Generator",
    description: "Provides random inspirational quotes using Forismatic API. The user can share the quotes on Facebook and Twitter. Built using Javascript, JQuery, HTML, CSS3, and Bootstrap.",
    href: "https://maribelduran.github.io/inspirational-quote-generator/"
  }
];

function App() {
  return (
    <>
      <Hero heading="Hello Again World!" intro="Welcome to my playground!" />

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))
          }
        </div>
      </section>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
