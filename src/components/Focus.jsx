import { whatIBuild } from "../data/portfolioData";

export default function Focus() {
  return (
    <section id="build" className="section-wrap" aria-labelledby="build-heading">
      <div className="container">
        <div className="section-intro rv">
          <span className="section-eyebrow">03 · Solutions</span>
          <h2 id="build-heading" className="section-title">
            What I Build
          </h2>
          <p className="section-subtitle">
            Specialized backend systems, data pipelines, and automation tools designed to solve real-world operational challenges.
          </p>
        </div>

        <div className="focus-grid">
          {whatIBuild.map((item) => (
            <div className="focus-card rv" key={item.number}>
              <div className="focus-card-top">
                <span className="focus-number">{item.number}</span>
                <span className="focus-hairline" aria-hidden="true" />
              </div>
              <h3 className="focus-title">{item.title}</h3>
              <p className="focus-desc">{item.description}</p>

              <div className="focus-tech-wrap">
                <span className="focus-tech-label">Technologies:</span>
                <div className="focus-tech-tags">
                  {item.technologies.map((tech) => (
                    <span className="focus-tech-tag" key={tech}>
                      {tech}
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
