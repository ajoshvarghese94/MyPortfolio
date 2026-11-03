import { portfolioConfig } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section-wrap" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-layout rv">
          <div className="about-header">
            <span className="section-eyebrow">01 · About</span>
            <h2 id="about-heading" className="section-title">
              Engineering practical, reliable backend systems.
            </h2>
          </div>

          <div className="about-body">
            <p className="about-lead">
              {portfolioConfig.introduction.lead}
            </p>
            <p>
              {portfolioConfig.introduction.body}
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <span className="pillar-tag">Core Focus</span>
                <h4>Scalable REST APIs</h4>
                <p>Engineered with ASP.NET Core, structured controllers, clean dependency injection, and modular service layers.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-tag">Data Architecture</span>
                <h4>Database Management</h4>
                <p>Relational MySQL schema design, indexing strategies, and query performance tuning for high-volume transactions.</p>
              </div>
              <div className="pillar-item">
                <span className="pillar-tag">Business Impact</span>
                <h4>Process Automation</h4>
                <p>Automating repetitive workflows, scheduled background data feeds, and containerized Docker services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
