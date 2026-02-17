import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-dim)', background: 'var(--bg-darker)' }}>
        <p>© {new Date().getFullYear()} Shalin Sheth. Built for Excellence.</p>
      </footer>
    </div>
  );
}

export default App;
