import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-intro rv">
          <span className="section-eyebrow">02 · Technical Skills</span>
          <h2 id="skills-heading" className="section-title">
            Technical expertise &amp; stack
          </h2>
          <p className="section-subtitle">
            Organized around backend system engineering, scalable API development, relational data management, and automated delivery pipelines.
          </p>
        </div>

        <div className="skills-bento-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`skill-bento-card rv ${cat.featured ? "featured" : ""} ${
                cat.isSecondary ? "secondary-category" : ""
              }`}
            >
              <div className="card-top">
                <span className="category-label">{cat.category}</span>
                <span className="card-index" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="skill-card-title">{cat.title}</h3>
              <p className="skill-card-desc">{cat.description}</p>

              <div className="skill-chips-group">
                <div className="chip-list">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`tech-chip ${cat.featured ? "core-chip" : "comp-chip"}`}
                    >
                      {cat.featured && <span className="chip-dot" aria-hidden="true" />}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
