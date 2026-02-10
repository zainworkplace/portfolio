import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navWrap">
      <nav className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          Zain Ul Abdin
        </a>

        <button
          className="burgerMenu"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`burger ${isOpen ? "open" : ""}`}></span>
          <span className={`burger ${isOpen ? "open" : ""}`}></span>
          <span className={`burger ${isOpen ? "open" : ""}`}></span>
        </button>

        <div className={`links ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="/resume.pdf" download onClick={closeMenu}>
            Resume
          </a>
          <a className="cta" href="#contact" onClick={closeMenu}>
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
