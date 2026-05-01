import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "inklusiv",
    companyName: "Inklusiv",
    companyLogo: "/images/experience/inklusiv.jpeg",
    positions: [
      {
        id: "inklusiv-frontend-engineer",
        title: "Inklusiv | Frontend Engineer",
        employmentPeriod: {
          start: "04.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `*Maadi, Egypt*

- Built responsive UI components and authentication flows, and integrated REST APIs with the backend team to streamline user onboarding.
- Led the frontend implementation of AI-powered features, including an automated CV parser and an AI-driven assessment system with real-time scoring.
- Translated complex AI workflows into clean, intuitive interfaces focused on a smooth end-user experience.`,
        skills: [
          "Next.js",
          "TypeScript",
          "React",
          "Zod",
          "REST APIs",
          "Tailwind CSS",
          "AI Integration",
          "Git",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "web-masters",
    companyName: "Web Masters",
    companyLogo: "/images/experience/web-masters.jpg",
    positions: [
      {
        id: "web-masters-frontend-intern",
        title: "Web Masters | Frontend Development Intern",
        employmentPeriod: {
          start: "01.2025",
          end: "03.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `*Remote*

- Built responsive, cross-browser UIs for client web applications.
- Optimized performance and refined UX through code, asset, and interaction improvements.`,
        skills: [
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Git",
        ],
      },
    ],
  },
  {
    id: "vodafone",
    companyName: "Vodafone",
    companyLogo: "/images/experience/vodafone.svg",
    positions: [
      {
        id: "vodafone-vodanation-intern",
        title: "Vodafone | Technology Department Intern",
        employmentPeriod: {
          start: "07.2023",
          end: "08.2023",
        },
        employmentType: "Vodanation Summer Internship",
        icon: "business",
        description: `*Smart Village, Egypt*

- Rotated across development, security, and customer care teams, gaining exposure to telecom operations and workflows.
- Adapted quickly to diverse technical environments and collaborated with cross-functional teams.`,
        skills: [
          "Teamwork",
          "Adaptability",
          "Communication",
          "Problem-solving",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "northampton-aastmt",
        title: "University of Northampton UK — AASTMT Program",
        employmentPeriod: {
          start: "2019",
          end: "2023",
        },
        employmentType: "Bachelor of Computer Science",
        icon: "education",
        description: `*Smart Village, Egypt*

- **Graduation Project** | Autonomous car model using BCI signals with mobile app control and AI-based obstacle detection.`,
      },
      {
        id: "uab-summer-ai",
        title: "Universitat Autònoma de Barcelona — Summer Training in Artificial Intelligence",
        employmentPeriod: {
          start: "09.2022",
          end: "10.2022",
        },
        employmentType: "Summer Trainee",
        icon: "education",
        description: `*Barcelona, Spain*

- Participated in a summer AI program at the University of Autonoma, Barcelona, gaining insights into NLP, computer vision, and reinforcement learning.`,
      },
    ],
  },
];
