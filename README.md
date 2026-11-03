# Ajosh Varghese — .NET Backend Developer Portfolio

Modern, high-performance portfolio for **Ajosh Varghese**, .NET Backend Developer specializing in C#, ASP.NET Core REST APIs, MySQL, and business process automation. Built with React (Vite) and styled with a luxury Obsidian & Champagne Gold aesthetic.

- **Portfolio URL:** [ajoshvarghese.in](https://ajoshvarghese.in) (and [ajosh-portfolio.vercel.app](https://ajosh-portfolio.vercel.app))
- **GitHub:** [github.com/ajoshvarghese94](https://github.com/ajoshvarghese94)
- **LinkedIn:** [linkedin.com/in/ajoshvarghese](https://linkedin.com/in/ajoshvarghese)

---

## 💎 Features & Architecture

- **Primary Backend Specialization:** Clear, immediate positioning across the hero, about narrative, skills bento grid, and solutions catalog focusing on C#, ASP.NET Core, REST APIs, and MySQL.
- **Dedicated "What I Build" Section:** 4 structured solution pillars (Real Estate Data Management, Data Entry & Delivery Platforms, Automation & Scheduling, Internal Business Applications) with explicit technology badges.
- **Secondary Desktop Positioning:** Windows Forms & desktop tooling designated as a secondary support capability without diluting core backend identity.
- **Prominent Social Links:** Direct GitHub and LinkedIn links in the Hero and Contact sections, opening securely in new tabs (`target="_blank" rel="noopener noreferrer"`).
- **Mobile-First & Ultra-Responsive:** Tested from 320px to 1920px+ with zero horizontal overflow, fluid typography (`clamp()`), notch support (`viewport-fit=cover`), and minimum 44px touch targets.
- **Accessible Mobile Navigation Drawer:** Accessible hamburger menu with focus trap, `Escape` key close, `aria-expanded`, and body scroll lock.
- **Lighthouse 95+ Performance:** Preconnected Google Fonts (Instrument Serif + DM Sans + JetBrains Mono), no render-blocking `@import`, high-priority LCP hero portrait, and WCAG AA contrast.
- **SEO & Social Cards:** Comprehensive Open Graph, Twitter Cards, canonical URL, custom black & gold SVG favicon, and Schema.org `Person` JSON-LD structured data.

---

## 🛠️ Configuration & Content Customization

All personal content and profile settings reside in [`src/data/portfolioData.js`](src/data/portfolioData.js):

- **Social Links:** Configured with your GitHub (`https://github.com/ajoshvarghese94`) and LinkedIn (`https://linkedin.com/in/ajoshvarghese`).
- **Resume Download:** Drop your resume in `public/resume.pdf` and set `resume.enabled: true` in `portfolioConfig`.
- **Experience Trajectory:** Update company names or milestones in `experienceData`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel

Pushing to `main` triggers automatic deployment to [ajoshvarghese.in](https://ajoshvarghese.in):
```bash
git add .
git commit -m "feat: enhance portfolio with .NET backend focus, social links, and What I Build section"
git push origin main
```
