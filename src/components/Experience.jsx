import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-intro rv">
          <span className="section-eyebrow">04 · Experience</span>
          <h2 id="experience-heading" className="section-title">
            Professional trajectory
          </h2>
          <p className="section-subtitle">
            Over eight years of focused software engineering building dependable .NET backend systems, REST APIs, and database architectures.
          </p>
        </div>

        <div className="experience-timeline rv">
          <div className="timeline-card">
            <div className="timeline-node" aria-hidden="true" />
            
            <div className="timeline-header">
              <div>
                <h3 className="role-title">{experienceData.role}</h3>
                <p className="role-domain">{experienceData.domain}</p>
              </div>
              <div className="role-badge-group">
                <span className="role-duration">{experienceData.experienceYears}</span>
              </div>
            </div>

            <div className="role-summary-box">
              <span className="box-badge">Career Overview</span>
              <p>
                Specializing in backend engineering, scalable REST APIs, relational schema architecture, and process automation
                for data-intensive real estate platforms and enterprise workflows.
              </p>
            </div>

            <ul className="duties-list" aria-label="Key Responsibilities">
              {experienceData.responsibilities.map((duty) => (
                <li key={duty} className="duty-item">
                  <span className="duty-bullet" aria-hidden="true" />
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
