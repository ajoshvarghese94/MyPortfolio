import { portfolioConfig } from "../data/portfolioData";

export default function Contact({ onCopyEmail }) {
  return (
    <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-box rv">
          <div className="contact-glow" aria-hidden="true" />

          <span className="section-eyebrow">05 · Contact</span>
          <h2 id="contact-heading" className="contact-title">
            Let’s build something dependable.
          </h2>

          <p className="contact-sub">
            Looking for a .NET Backend Developer specializing in scalable REST APIs, database architectures, or business process automation? Let’s start a conversation.
          </p>

          <a
            className="contact-email-link"
            href={`mailto:${portfolioConfig.email}?subject=.NET%20Backend%20Developer%20Inquiry`}
            aria-label={`Send email to ${portfolioConfig.email}`}
          >
            {portfolioConfig.email}
          </a>

          <div className="contact-actions">
            <a
              className="btn btn-primary"
              href={`mailto:${portfolioConfig.email}?subject=.NET%20Backend%20Developer%20Inquiry`}
            >
              <span>Send an email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </a>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCopyEmail}
              aria-label="Copy email address"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy address</span>
            </button>
          </div>

          {/* Social Profiles: GitHub & LinkedIn (opens in a new tab) */}
          <div className="social-links-wrap">
            <span className="social-legend">Connect &amp; Collaborate:</span>
            <div className="social-links">
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Ajosh Varghese GitHub Profile (opens in a new tab)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
                <span className="external-arrow" aria-hidden="true">↗</span>
              </a>

              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Ajosh Varghese LinkedIn Profile (opens in a new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <span className="external-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
