import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "forrof",
    companyName: "Forrof.io",
    companyLogo: "/images/experience/forrof.svg",
    positions: [
      {
        id: "forrof-fullstack-dev",
        title: "Senior Fullstack Developer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Develop scalable SaaS applications using modern web technologies.
- Build cross-platform applications with React Native and Electron.
- Architect and develop full-stack solutions with the MERN stack.
- Design and implement RESTful APIs with Node.js, Express.js and NestJS
- Build responsive, performant frontend applications with Next.js and React.
- Integrate third-party APIs and real-time features using WebSockets.
- Collaborate with cross-functional teams in a remote environment.
- Optimize application performance and ensure code quality.`,
        skills: [
          "MERN Stack",
          "React.js",
          "React Native",
          "Next.js",
          "NestJS",
          "Electron",
          "TypeScript",
          "MongoDB",
          "Express.js",
          "PostgreSQL",
          "RESTful APIs",
          "SaaS Development",
          "Remote Work",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "forrof-3d-specialist",
        title: "3D Web Specialist",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Implement immersive 3D web experiences using Three.js and WebGL.
- Optimize 3D rendering performance for smooth user experiences.
- Develop custom shaders and materials for advanced visual effects.
- Integrate 3D models and assets from Blender and other design tools.
- Build responsive 3D interfaces that work across devices.
- Implement physics simulations and interactive 3D controls.`,
        skills: [
          "Three.js",
          "WebGL",
          "Rapier Physics Engine",
          "3D Web Development",
          "React Three Fiber",
          "GLSL Shaders",
          "Blender",
          "3D Modeling",
          "Performance Optimization",
          "Interactive Design",
        ],
      },
    ],
    isCurrentEmployer: true,
    theme: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[Fynosign](https://fynosign.com)** - Built complete e-signature SaaS platform with PDF signing workflows (pdf-lib), Stripe subscriptions, OAuth, Gemini AI insights, and audit trails. Deployed on AWS EC2.

- **[LoopIQ](https://www.loopiq.xyz)** - Developed healthcare management platform frontend with React, Redux Toolkit, and RTK Query. Integrated FastAPI backend for patient workflows and SLA tracking.

- **[RallyTyper](https://rallytyper.com)** - Resolved unclear deployment setup, built admin dashboard with blog CMS, retrieved MySQL credentials from WordPress config, and optimized React build.

- **[Khrimisay](https://dev.khrimisay.com)** - Fixed critical PWA cookie persistence causing mobile logouts. Resolved RTK Query caching issues, authentication bugs (OTP, navigation), and UI/UX problems.

- **[Space Facts Explorer](https://apps.apple.com/us/app/space-facts-explorer/id6749238944)** - Extracted app from Rork.ai and rebuilt as Expo React Native project. Managed complete App Store deployment, designed assets with Figma/Canva, overcame rejections.

- **[Zas Dashboard](https://zas-dashboard-v12n.vercel.app)** - Built employment analytics platform consuming Spanish labor APIs (100k+ rows). Transformed Spanish variables to English, built interactive stats with filters.

- **[Precision](/internal-project)** - Rebuilt CSV/Excel module for real estate platform (MERN). Implemented flexible parsing, validation, and error reporting for complex industry datasets.

- **[Lead Smart](/internal-project)** - Integrated backend APIs into React TypeScript frontend. Rebuilt dashboard UI with real-time metrics, cleaned codebase, unified styling.`,
        icon: "code",
        skills: [
          "React",
          "React Native",
          "Redux Toolkit",
          "TypeScript",
          "Node.js",
          "NestJS",
          "FastAPI",
          "MongoDB",
          "PostgreSQL",
          "AWS EC2",
          "Stripe",
          "OAuth",
          "Expo",
          "pdf-lib",
          "API Integration",
        ],
        isExpanded: true,
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "UI/UX & 3D Engineer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        description: `**Key Projects:**

- **[Oil Refinery Platform](https://oil-refinery.vercel.app)** - Built interactive 3D visualization with React Three Fiber and Three.js. Implemented realistic lighting, water physics, and real-time monitoring concepts.

- **[Fitreps](https://www.fitreps.com)** - Redesigned subscription UI/UX with custom CSS on legacy Material UI (no Tailwind). Built modals and drawers. Developed dark mode from scratch.

- **[Truer EHR Dashboard](https://ehr-dashboard-nine.vercel.app)** - Built EHR dashboard UI with OAuth authentication (Google + Supabase). Implemented patient CRUD, dashboard stats, and API integration.

- **[Stall Bedding Calculator](https://bedding-calculator.netlify.app)** - Built responsive calculator with pure HTML/CSS/JS. Replicated AI design, made fully responsive, implemented volume calculations with store-specific pricing.

- **[EdTech Platform](/internal-project)** - Designed multi-step auth UI with AWS Cognito. Refactored flow replacing prop drilling with Redux Toolkit for clean parent/child registration data management.`,
        icon: "design",
        skills: [
          "Three.js",
          "React Three Fiber",
          "UI/UX Design",
          "Figma",
          "Material UI",
          "Custom CSS",
          "Dark Mode Design",
          "Responsive Design",
          "Redux Toolkit",
          "AWS Cognito",
          "Supabase",
        ],
      },
    ],
  },
];
