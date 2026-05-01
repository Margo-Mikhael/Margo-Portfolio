import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Margo Mikhael",
  lastName: "Waseem",
  displayName: "Margo Mikhael",
  username: "abdulrehmanwaseem",
  bio: "Creating with code. Small details matter.",
  timeZone: "Africa/Cairo",
  flipSentences: ["Frontend Developer", "Software Engineer"],
  address: "Cairo, Egypt",
  phoneNumber: "KzIwMTAxMzEwMzA1MQ==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bWFyZ29taWtoYWVsbEBnbWFpbC5jb20=", // base64 encoded
  website: "https://margomikhael.com",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "L1 Frontend Engineer",
      company: "inklusiv.team",
      website: "https://inklusiv.team",
    },
  ],
  about: `
I'm Margo — a Computer Science graduate who fell for the front of the stack. These days I build production interfaces with React, Next.js, and TypeScript at Inklusiv, focusing on the details most people never notice but always feel.

I care about clean, accessible code — and just as much about the human on the other side of the screen.

Every green square below is a day I showed up and shipped. Consistency, like good design, is built one commit at a time.
`,
  avatar: "/images/me.jpeg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/abdulrehman.mp3",
  keywords: [
    "abdul rehman",
    "abdulrehmanwaseem",
    "abdul rehman waseem",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2025-10-12", // YYYY-MM-DD
};
