import './App.css'
import Hero from "./components/Hero";
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const projects: Project[] = [
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
      <Footer />
    </>
  )
}

export default App
