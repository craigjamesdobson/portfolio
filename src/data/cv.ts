export type ContactLink = {
  label: string;
  href: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  highlights: readonly string[];
};

export type FocusArea = {
  heading: string;
  items: readonly string[];
};

export type ProjectCaseStudy = {
  label: string;
  name: string;
  summary: string;
  stack: readonly string[];
  outcomes: readonly string[];
};

export const cvData = {
  name: "Craig Dobson",
  title: "Senior Web Developer",
  location: "Somerset, UK",
  profile:
    "Senior web developer with over ten years of experience building and maintaining production ecommerce systems in agency and product contexts. Frontend-focused with a strong full-stack foundation, progressing from client-facing features to broader backend responsibilities across a .NET and SQL Server stack. Experienced in modernising legacy platforms, leading Vue adoption, and delivering Shopify solutions for early-stage startups through to Shopify Plus clients.",
  contactLinks: [
    {
      label: "Email",
      href: "mailto:dobson.cj@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/craigjamesdobson",
    },
  ] satisfies readonly ContactLink[],
  experience: [
    {
      role: "Senior Web Developer",
      company: "Webselect",
      period: "May 2014 - Present",
      highlights: [
        "Owned and maintained the client-facing frontend for a bespoke ecommerce SaaS platform used across retail, food, and agriculture.",
        "Led Vue architecture and delivery for a rebuild of a legacy CMS frontend, including state management, team training, and documentation.",
        "Delivered bespoke client features while maintaining shared accessibility, consistency, and code quality across the platform.",
        "Expanded into full-stack delivery by building CRUD features and integrating frontend work with .NET backend services and SQL Server schemas.",
        "Became the primary technical lead for Shopify work, delivering new storefronts and ongoing development for Shopify Plus clients.",
      ],
    },
    {
      role: "Independent Full-Stack Project",
      company: "Fantasy Football Web Application",
      period: "Ongoing",
      highlights: [
        "Built and maintain a fantasy football platform used by 50+ participants with Nuxt 3, Vue 3 Composition API, TypeScript, and Supabase.",
        "Led multiple iterations from frontend rebuilds to persistent data storage and admin-only tooling for teams, fixtures, and results.",
        "Integrated transactional service emails using React Email and Resend based on real usage and feedback.",
      ],
    },
    {
      role: "Web Administrator",
      company: "Thinkology",
      period: "July 2013 - April 2014",
      highlights: [
        "Supported full website delivery lifecycle from content gathering and build to launch and maintenance using ASP-based CMS, Umbraco, HTML, and CSS.",
      ],
    },
  ] satisfies readonly ExperienceEntry[],
  projectHighlights: [
    {
      label: "client work",
      name: "Legacy CMS Vue.js Migration",
      summary:
        "Replaced a legacy CMS frontend with a modern Vue.js architecture designed to scale across multiple client implementations.",
      stack: [
        "Vue.js",
        "TypeScript",
        "Component Architecture",
        "State Management",
        ".NET Integration",
        "SQL Server",
        "Technical Documentation",
      ],
      outcomes: [
        "Led architectural design and implementation from planning through delivery.",
        "Delivered a production system that is actively used by clients across the platform.",
        "Established reusable component patterns, state conventions, and implementation standards for the wider team.",
        "Provided onboarding documentation and team guidance to support adoption and long-term maintainability.",
      ],
    },
    {
      label: "client work",
      name: "Shopify Plus Theme Migration",
      summary:
        "Delivered a full theme migration for a high-volume Shopify Plus client, combining platform best practice with bespoke user journeys.",
      stack: [
        "Shopify Plus",
        "Liquid",
        "Theme Migration",
        "Metafields",
        "Custom Product Templates",
        "App Integrations",
      ],
      outcomes: [
        "Planned and executed full theme migration with controlled rollout and regression checks.",
        "Built bespoke product page experiences powered by structured metafield content.",
        "Integrated multiple third-party apps and resolved conflicts across styling, scripts, and data flow.",
        "Improved maintainability by standardising section patterns and reducing one-off theme customisations.",
      ],
    },
    {
      label: "personal project",
      name: "Fantasy Football Web Application",
      summary:
        "A long-running independent product built and maintained around real users, with ongoing improvements guided by feedback and usage.",
      stack: [
        "Nuxt 3",
        "Vue 3 Composition API",
        "TypeScript",
        "Supabase",
        "Pinia",
        "React Email",
        "Resend",
      ],
      outcomes: [
        "Supports 50+ active participants across a live competition cycle.",
        "Evolved through multiple production iterations including admin tooling and persistent data workflows.",
        "Uses a deliberately simple admin-only auth model aligned to usage and risk.",
      ],
    },
  ] satisfies readonly ProjectCaseStudy[],
  technicalFocus: [
    {
      heading: "Languages",
      items: ["JavaScript", "TypeScript", "C# (.NET)", "HTML", "CSS"],
    },
    {
      heading: "Frameworks",
      items: ["Vue.js", "React", "Nuxt", ".NET", "SPA and SSR architecture"],
    },
    {
      heading: "Ecommerce",
      items: ["Shopify", "Shopify Plus", "Liquid", "Theme and app development"],
    },
    {
      heading: "Databases",
      items: ["PostgreSQL", "SQL Server", "SQLite", "Prisma", "Drizzle ORM"],
    },
    {
      heading: "Infrastructure",
      items: ["Cloudflare", "DNS management", "Environment-level application setup"],
    },
    {
      heading: "Standards and Tooling",
      items: ["Accessibility", "Performance optimisation", "Responsive design", "Git", "GitHub Actions", "Docker"],
    },
  ] satisfies readonly FocusArea[],
  education: [
    "Shopify Development Fundamentals - Shopify Academy",
    "BTEC National Diploma in IT Practitioner (DDM) - Somerset College of Arts and Technology",
  ],
  availability: "For collaborations, freelance enquiries, or technical conversations, feel free to get in touch.",
} as const;
