import "../styles/experience.css";

const experience = [
  {
    company: "Resolute Digital",
    role: "Full Stack Developer",
    years: "2024 - Present",
    bullets: [
      "Develop and maintain full-stack web applications using the MERN stack.",
      "Design and implement RESTful APIs and integrate MongoDB databases.",
      "Build dynamic, reusable React components with clean state management.",
    ],
  },
  {
    company: "Popular International Pvt Ltd",
    role: "Frontend Web Developer",
    years: "2022 - 2024",
    bullets: [
      "Built responsive and user-friendly interfaces using React.js, HTML, CSS, and JavaScript.",
      "Converted UI/UX designs into functional web applications.",
      "Improved website performance and cross-browser compatibility.",
    ],
  },
  {
    company: "Voiebiz",
    role: "Web Developer (Remote)",
    years: "2021 - 2022",
    bullets: [
      "Developed multiple client websites using HTML, CSS, JavaScript, jQuery, Firebase, and WordPress.",
      "Implemented real-time data handling with Firebase.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="expList">
      {experience.map((e) => (
        <div key={e.company} className="card">
          <div className="cardTop">
            <div>
              <h3>{e.company}</h3>
              <p className="muted">{e.role}</p>
            </div>
            <span className="badge">{e.years}</span>
          </div>

          <ul>
            {e.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
