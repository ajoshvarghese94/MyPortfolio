import { portfolioConfig } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-copy">
            © {currentYear} {portfolioConfig.name}. {portfolioConfig.role}.
          </span>
          <span className="footer-domain">{portfolioConfig.domain}</span>
        </div>

        <div className="footer-right">
          <a href="#top" className="back-to-top" aria-label="Back to top of page">
            <span>Back to top</span>
            <span className="top-arrow" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

