import "../styles/hero.css";

export default function Hero() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section id="home" className="hero">
      <div className="heroInner">
        <div className="heroContent">
          <div className="heroText">
            <div className="pill">
              <span className="dot" />
              Software Engineer • Full-Stack Web Developer
            </div>

            <h1 className="heroTitle">Hi, I'm Zain Ul Abdin 👋</h1>

            <p className="heroSubtitle">
              Results-driven Software Engineer with 4+ years of experience in
              designing, developing, and deploying scalable web applications. Strong
              expertise in MERN stack, ASP.NET Core Web API, WordPress/WooCommerce,
              and modern frontend technologies. Proven ability to build secure
              RESTful APIs, responsive user interfaces, and performance-optimized
              systems.
            </p>

            <div className="heroBtns">
              <a className="btnPrimary" href="#projects">
                View Projects
              </a>

              <a className="btnSecondary" href="#contact">
                Contact Me
              </a>

              <a className="btnSecondary" href={`${baseUrl}resume.pdf`} download>
                Download Resume (PDF)
              </a>

              <a
                className="btnSecondary"
                href="mailto:zainworkplace97@gmail.com?subject=Portfolio%20Inquiry"
              >
                Email Me
              </a>
            </div>

            <div className="socialRow">
              <a href="https://github.com/zainworkplace" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/zain-ul-abdin-94307823a" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="heroImage">
            <img
              src={`${baseUrl}profile.jpg`}
              alt="Zain Ul Abdin"
              className="profilePic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
