import { useEffect, useMemo, useState } from "react";
import "../styles/projects.css";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Inventory Management System",
    desc: "Developed a full-stack inventory system with Express.js, EJS, and MongoDB, featuring product tracking, stock management, and CRUD operations.",
    stack: ["Express.js", "EJS", "MongoDB"],
    status: "completed",
    live: "https://factory-omzr.onrender.com/login#master-data",
    github: "https://github.com/zainworkplace",
    screenshots: [
      "/projects/inventory/1.png",
      "/projects/inventory/2.png",
      "/projects/inventory/3.png",
      "/projects/inventory/4.png",
      "/projects/inventory/5.png",
      "/projects/inventory/6.png",
      "/projects/inventory/7.png",
      "/projects/inventory/8.png",
      "/projects/inventory/9.png",
      "/projects/inventory/10.png",
    ],
    details: {
      overview:
        "A comprehensive inventory management system for tracking stock, managing products, and streamlining daily operations efficiently.",
      features: [
        "Product tracking and management",
        "Stock management and updates",
        "CRUD operations",
        "User-friendly dashboard",
      ],
      highlights: ["Efficient stock tracking", "Real-time updates"],
      challenges: [
        {
          problem: "Avoiding inconsistent stock updates.",
          solution: "Centralized update logic and validations for stock changes.",
        },
      ],
    },
  },
  {
    title: "Blog Website",
    desc: "Built a full-stack blog platform using MongoDB, Express.js, React.js, and Node.js, featuring post creation, editing, commenting, and user authentication.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "completed",
    live: "https://react-blog-template.vercel.app/",
    github: "https://github.com/zainworkplace",
    screenshots: [
      "/projects/blog/1.png",
      "/projects/blog/2.png",
      "/projects/blog/3.png",
      "/projects/blog/4.png",
      "/projects/blog/5.png",
    ],
    details: {
      overview:
        "A full-stack blog platform focused on speed, clean UX, and an enjoyable writing/reading experience with comprehensive content management.",
      features: [
        "User authentication (Login/Signup)",
        "Create / edit / delete posts",
        "Commenting system",
        "Category & tag system",
        "Responsive layout for mobile + desktop",
      ],
      highlights: [
        "Clean UI with fast navigation",
        "Reusable components and neat folder organization",
      ],
      challenges: [
        {
          problem: "Handling auth securely and keeping users logged in.",
          solution: "JWT-based auth with protected routes and secure API patterns.",
        },
      ],
    },
  },
  {
    title: "E-commerce Website (Telemart Inspired)",
    desc: "Developed a full-featured e-commerce website with product listing, shopping cart, user authentication, and real-time database integration using plain JavaScript, jQuery, HTML, CSS, and Firebase.",
    stack: ["JavaScript", "jQuery", "HTML", "CSS", "Firebase"],
    status: "completed",
    live: "https://youtube.com/watch?v=TRyzr3jId34&feature=youtu.be",
    github: "https://github.com/zainworkplace",
    screenshots: [
      "/projects/ecommerce/1.png",
      "/projects/ecommerce/2.png",
      "/projects/ecommerce/3.png",
      "/projects/ecommerce/4.png",
      "/projects/ecommerce/5.png",
      "/projects/ecommerce/6.png",
      "/projects/ecommerce/7.png",
    ],
    details: {
      overview:
        "A real-time shopping experience with comprehensive product management and user-friendly cart system backed by Firebase.",
      features: [
        "Product listing & categories",
        "Dynamic shopping cart",
        "User authentication",
        "Real-time database integration",
        "Quantity management",
      ],
      highlights: ["Fast user flow", "Simple and intuitive navigation"],
      challenges: [
        {
          problem: "Syncing cart state with realtime updates.",
          solution: "Structured Firebase data + careful event handling.",
        },
      ],
    },
  },
  {
    title: "Health Related Blog Website",
    desc: "Created a health-focused blog website using React.js, Express.js, MongoDB, and Node.js with modern design and functional features.",
    stack: ["React.js", "Express.js", "MongoDB", "Node.js"],
    status: "completed",
    live: "https://nsnejjbr.manus.space/",
    github: "https://github.com/zainworkplace",
    screenshots: [
      "/projects/health-blog/1.png",
      "/projects/health-blog/2.png",
      "/projects/health-blog/3.png",
      "/projects/health-blog/4.png",
      "/projects/health-blog/5.png",
    ],
    details: {
      overview:
        "A specialized health blog platform demonstrating modern development practices with responsive design and optimized performance.",
      features: [
        "Health-focused content management",
        "User engagement features",
        "Responsive layout",
        "Modern user interface",
        "Optimized performance",
      ],
      highlights: ["Clean code structure", "User experience focus"],
      challenges: [
        {
          problem: "Ensuring cross-browser compatibility.",
          solution: "Testing across multiple browsers and devices.",
        },
      ],
    },
  },
  {
    title: "HR Management System",
    desc: "Developing a full-stack HR system with employee management, attendance, leave tracking, and role-based access using MongoDB, Express, React, and Node.js.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    status: "developing",
    live: "https://fence-chief-07913711.figma.site/",
    github: "https://github.com/zainworkplace",
    screenshots: [
      "/projects/hrms/1.png",
      "/projects/hrms/2.png",
      "/projects/hrms/3.png",
      "/projects/hrms/4.png",
      "/projects/hrms/5.png",
      "/projects/hrms/6.png",
    ],
    details: {
      overview:
        "A comprehensive HR platform supporting employee records, attendance tracking, leave workflows, and role-based access control for enterprise use.",
      features: [
        "Employee management (CRUD)",
        "Attendance tracking",
        "Leave requests & approvals",
        "Role-based access control (RBAC)",
        "Dashboard analytics",
      ],
      highlights: ["Scalable structure", "Enterprise-ready features"],
      challenges: [
        {
          problem: "Managing permissions for different roles.",
          solution: "Role-based access control and protected routes.",
        },
      ],
    },
  },
];

function LinkButton({ href, children, variant = "primary" }) {
  const cls = variant === "primary" ? "btnSmallPrimary" : "btnSmallSecondary";
  const isDisabled = !href;

  if (isDisabled) {
    return (
      <button className={`${cls} disabled`} disabled>
        {children}
      </button>
    );
  }

  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.status === filter);
  }, [filter]);

  const activeProject = useMemo(() => {
    if (activeIndex === null) return null;
    return projects[activeIndex] ?? null;
  }, [activeIndex]);

  useEffect(() => {
    if (!activeProject) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeProject]);

  const getStatusBadge = (status) => {
    if (status === "completed") {
      return <span className="badge badge-completed">✓ Completed</span>;
    }
    if (status === "developing") {
      return <span className="badge badge-developing">◉ In Development</span>;
    }
    return null;
  };

  return (
    <>
      <div className="projectsContainer">
        <div className="filterButtons">
          <button
            className={`filterBtn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filterBtn ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`filterBtn ${filter === "developing" ? "active" : ""}`}
            onClick={() => setFilter("developing")}
          >
            In Development
          </button>
        </div>

        <div className="projectGrid">
          {filteredProjects.map((p, idx) => (
            <button
              key={p.title}
              className="card projectCard projectButton"
              onClick={() => setActiveIndex(idx)}
              type="button"
              aria-label={`Open details for ${p.title}`}
            >
              <div className="projectHeader">
                <h3>{p.title}</h3>
                {getStatusBadge(p.status)}
              </div>
              <p className="muted">{p.desc}</p>

              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <div className="projectBtns" onClick={(e) => e.stopPropagation()}>
                <LinkButton href={p.live}>Live Demo</LinkButton>
                <LinkButton href={p.github} variant="secondary">
                  GitHub
                </LinkButton>
                <button
                  className="btnSmallSecondary"
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                >
                  Details
                </button>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal
        open={!!activeProject}
        project={activeProject}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}
