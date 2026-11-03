/**
 * Portfolio Data & Profile Configuration
 * Ajosh Varghese — .NET Backend Developer
 */

export const portfolioConfig = {
  name: "Ajosh Varghese",
  role: ".NET Backend Developer",
  experienceYears: "8+",
  domain: "Real Estate & Enterprise Systems",
  headline: ".NET Backend Developer building scalable APIs and business solutions.",
  email: "ajoshvarghese94@gmail.com",
  location: "",
  status: "Open to new opportunities",

  // Professional Introduction
  introduction: {
    lead: "I'm a software developer with hands-on experience in C# and .NET technologies, specializing in building scalable REST APIs, backend systems, and business automation solutions.",
    body: "I enjoy solving complex problems and turning ideas into practical, reliable software that improves business processes and efficiency.",
  },

  // Social & Professional Links
  social: {
    github: "https://github.com/ajoshvarghese94",
    linkedin: "https://linkedin.com/in/ajoshvarghese",
  },

  // Resume Configuration
  resume: {
    enabled: false,
    path: "/resume.pdf",
    filename: "Ajosh_Varghese_DotNet_Backend_Developer_Resume.pdf",
  },
};

export const stats = [
  { value: "8+", label: "Years in C# & .NET" },
  { value: "Backend", label: "APIs & System Architecture" },
  { value: "Real Estate", label: "Core Business Domain" },
  { value: "Automation", label: "Scheduled Jobs & Workflows" },
];

export const skillCategories = [
  {
    id: "backend",
    category: "Primary Specialization",
    title: "Backend Development",
    description:
      "Core engineering focus: designing robust REST APIs, clean service architectures, and high-throughput server backends.",
    featured: true,
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET Core",
      "REST APIs",
      "API Development",
      "Backend Architecture",
    ],
  },
  {
    id: "database",
    category: "Data & Storage",
    title: "Database & Data Management",
    description:
      "Relational schema design, structured data queries, indexing strategies, and query performance tuning.",
    featured: false,
    skills: [
      "MySQL",
      "SQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    id: "tools",
    category: "Infrastructure & Workflows",
    title: "Tools & DevOps",
    description:
      "Modern tooling, containerization, and deployment pipelines for dependable release cycles.",
    featured: false,
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux",
      "AWS",
      "Jenkins",
      "Postman",
      "Visual Studio",
    ],
  },
  {
    id: "frontend",
    category: "Web Interfaces",
    title: "Frontend Development",
    description:
      "Interactive, responsive user interfaces connected to backend RESTful endpoints.",
    featured: false,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "desktop",
    category: "Secondary Capability",
    title: "Desktop Development",
    description:
      "Internal operational desktop tools and back-office utilities supporting business workflows.",
    featured: false,
    isSecondary: true,
    skills: [
      "C#",
      "Windows Forms",
      "Desktop Applications",
    ],
  },
];

export const whatIBuild = [
  {
    number: "01",
    title: "Real Estate Data Management",
    description:
      "Enterprise-focused real estate data management solutions built to reliably record, search, and synchronize high-volume property records.",
    technologies: [".NET Core", "C#", "MySQL", "REST APIs"],
  },
  {
    number: "02",
    title: "Data Entry & Delivery Platforms",
    description:
      "Scalable platforms for structured data entry, batch validation, background processing, and real-time delivery to stakeholder portals.",
    technologies: [".NET Core", "C#", "MySQL", "JavaScript"],
  },
  {
    number: "03",
    title: "Automation & Scheduling",
    description:
      "Business process automation, scheduled background jobs, reliable cron pipelines, and workflow optimization that minimize manual overhead.",
    technologies: [".NET", "MySQL", "Linux", "Docker"],
  },
  {
    number: "04",
    title: "Internal Business Applications",
    description:
      "Custom business applications and backend solutions engineered to eliminate bottlenecks and streamline internal team operations.",
    technologies: [".NET Core", "REST APIs", "MySQL"],
  },
];

export const experienceData = {
  role: ".NET Backend Developer",
  experienceYears: "8+ years",
  domain: "Real estate & enterprise business domain",
  companyPlaceholder: "[Company Name / Ongoing Client Engagement]",
  periodPlaceholder: "8+ Years Continuous Experience",
  responsibilities: [
    "Architect, develop, and maintain high-performance backend systems and REST APIs using C#, .NET Core, and ASP.NET Core.",
    "Design optimized MySQL schemas, establish index structures, and tune complex queries for data-intensive business applications.",
    "Implement business process automation pipelines, recurring background jobs, and workflow scheduling tools with .NET, Docker, and Linux.",
    "Build secure, modular API endpoints tested rigorously with Postman and integrated with frontend interfaces and third-party systems.",
    "Collaborate using Git/GitHub, Jenkins CI/CD workflows, AWS services, and Agile development practices to deliver dependable software.",
    "Support internal operations with focused desktop utilities (Windows Forms) and maintainable back-office applications where required.",
  ],
};
