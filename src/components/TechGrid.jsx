import "../styles/tech.css";

const tech = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Next.js",
  "jQuery",
  "Node.js",
  "Express.js",
  "Firebase",
  "C#",
  "ASP.NET Core Web API",
  "Oracle APEX",
  "MongoDB",
  "RESTful API Development",
  "SQL & PL/SQL",
  "WordPress",
  "WooCommerce",
  "SEO",
  "Git & GitHub",
  "Amazon Web Services",
  "Docker",
  "CI/CD Pipelines",
];

export default function TechGrid() {
  return (
    <div className="techGrid">
      {tech.map((t) => (
        <div key={t} className="techItem">
          {t}
        </div>
      ))}
    </div>
  );
}
