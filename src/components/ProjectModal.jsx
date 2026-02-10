import { useEffect, useMemo, useState } from "react";
import "../styles/modal.css";

export default function ProjectModal({ open, project, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const shots = useMemo(() => project?.screenshots || [], [project]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    setIdx(0);
  }, [open, project?.title]);

  if (!open || !project) return null;

  const d = project.details || {};
  const hasShots = shots.length > 0;

  const prev = () => setIdx((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setIdx((i) => (i + 1) % shots.length);

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <button className="modalBackdrop" onClick={onClose} aria-label="Close modal" />

      <div className="modal">
        <div className="modalHeader">
          <div>
            <h3 className="modalTitle">{project.title}</h3>
            <p className="modalSubtitle">{project.desc}</p>
          </div>

          <button className="modalClose" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="modalBody">
          <div className="modalSection">
            <h4>Screenshots</h4>

            {hasShots ? (
              <div className="shotWrap">
                <div className="shotFrame">
                  <img
                    className="shotImg"
                    src={shots[idx]}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    loading="lazy"
                  />

                  <div className="shotControls">
                    <button className="shotBtn" onClick={prev} type="button">
                      ← Prev
                    </button>
                    <div className="shotCount">
                      {idx + 1} / {shots.length}
                    </div>
                    <button className="shotBtn" onClick={next} type="button">
                      Next →
                    </button>
                  </div>
                </div>

                <div className="thumbRow">
                  {shots.map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      className={`thumb ${i === idx ? "active" : ""}`}
                      onClick={() => setIdx(i)}
                      aria-label={`Open screenshot ${i + 1}`}
                    >
                      <img src={s} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <p className="muted">
                Add screenshots in <code>public/projects/</code> and list them in
                <code> screenshots: []</code> inside <code>Projects.jsx</code>.
              </p>
            )}
          </div>

          <div className="modalSection">
            <h4>Tech Stack</h4>
            <div className="modalChips">
              {(project.stack || []).map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {d.overview ? (
            <div className="modalSection">
              <h4>Overview</h4>
              <p className="muted">{d.overview}</p>
            </div>
          ) : null}

          {Array.isArray(d.features) && d.features.length ? (
            <div className="modalSection">
              <h4>Key Features</h4>
              <ul className="modalList">
                {d.features.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {Array.isArray(d.highlights) && d.highlights.length ? (
            <div className="modalSection">
              <h4>Highlights</h4>
              <ul className="modalList">
                {d.highlights.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {Array.isArray(d.challenges) && d.challenges.length ? (
            <div className="modalSection">
              <h4>Challenges & Solutions</h4>
              <div className="challengeGrid">
                {d.challenges.map((c, i) => (
                  <div key={i} className="challengeCard">
                    <p className="challengeTitle">Problem</p>
                    <p className="muted">{c.problem}</p>
                    <div className="divider" />
                    <p className="challengeTitle">Solution</p>
                    <p className="muted">{c.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="modalFooter">
          <a
            className={`btnSmallPrimary ${project.live ? "" : "disabled"}`}
            href={project.live || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => !project.live && e.preventDefault()}
          >
            Live Demo
          </a>
          <a
            className={`btnSmallSecondary ${project.github ? "" : "disabled"}`}
            href={project.github || undefined}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => !project.github && e.preventDefault()}
          >
            GitHub
          </a>
          <button className="btnSmallSecondary" onClick={onClose} type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
