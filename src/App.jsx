import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import TechGrid from "./components/TechGrid";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingContactBtn from "./components/FloatingContactBtn";

import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <Section
          id="about"
          title="Technologies I Work With"
          subtitle="Modern tools for modern solutions"
        >
          <TechGrid />
        </Section>

        <Section id="experience" title="My Experience">
          <Experience />
        </Section>

        <Section id="projects" title="My Projects">
          <Projects />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>

      <FloatingContactBtn />
    </div>
  );
}
