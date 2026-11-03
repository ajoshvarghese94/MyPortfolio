import { stats } from "../data/portfolioData";

export default function Stats() {
  return (
    <section className="stats-section" aria-label="Key Career Metrics">
      <div className="container">
        <div className="stats-strip rv">
          {stats.map((item, index) => (
            <div className="stat-cell" key={item.value}>
              <span className="stat-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="stat-value">{item.value}</strong>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

