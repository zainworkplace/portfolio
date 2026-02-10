import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contactGrid">
      <div className="card">
        <h3>Reach me directly</h3>

        <div className="contactLines">
          <p>
            📍 <span className="muted">Karachi, Pakistan</span>
          </p>

          <p>
            📧{" "}
            <a href="mailto:zainworkplace97@gmail.com" className="link">
              zainworkplace97@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a href="tel:+923062263859" className="link">
              +92 306 2263859
            </a>
          </p>
        </div>

        <div className="contactBtns">
          <a
            className="btnSecondary"
            href="https://github.com/zainworkplace"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          {/* Replace with your real LinkedIn profile URL */}
          <a
            className="btnSecondary"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="card">
        <h3>Quick message</h3>
        <p className="muted">
          No backend — this opens your email with a prefilled message.
        </p>

        <a
          className="btnPrimary"
          href="mailto:zainworkplace97@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Zain,%0A%0A"
        >
          Email Me
        </a>

        <div style={{ marginTop: 10 }}>
          <a className="btnSecondary" href="/resume.pdf" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
