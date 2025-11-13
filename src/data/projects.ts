export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  role: string;
  timeline: string;
  images?: string[];
  link?: string;
  linkType?: 'website' | 'github';
}

export const projects: Project[] = [
  {
    title: "RallySphere App (Intern)",
    slug: "rallysphere",
    description:
      "A comprehensive sports management mobile application for organizing and tracking athletic events.",
    tags: ["React Native", "TypeScript", "Mobile Development", "UI/UX"],
    thumbnail: "/src/assets/RallysphereApp.png",
    link: "https://github.com/Mjjllolis/rallysphere",
    linkType: "github",
    overview:
      "RallySphere is a modern mobile application designed to streamline sports event management, providing real-time updates, team coordination, and performance analytics.",
    challenge:
      "Sports organizations needed an intuitive mobile platform to manage complex tournament schedules, team registrations, and real-time score tracking on the go.",
    solution:
      "Developed a React Native mobile application with real-time data synchronization, intuitive mobile interfaces, and cross-platform compatibility to ensure accessibility for coaches, players, and administrators on iOS and Android devices.",
    results: [
      "Currently in TestFlight beta testing phase",
      "Cross-platform compatibility for iOS and Android",
      "Real-time event synchronization implemented",
      "Positive feedback from beta testers on usability",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
      "Tailwind CSS",
    ],
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "6 months (Ongoing)",
  },
  {
    title: "RallySphere Website (Intern)",
    slug: "rallysphere",
    description:
      "A comprehensive sports management web platform for organizing and tracking athletic events.",
    tags: ["Web Development", "React", "TypeScript", "UI/UX"],
    thumbnail: "/src/assets/RallySphere.png",
    link: "https://www.rallysphere.com/",
    linkType: "website",
    overview:
      "RallySphere is a modern web application designed to streamline sports event management, providing real-time updates, team coordination, and performance analytics.",
    challenge:
      "Sports organizations needed an intuitive platform to manage complex tournament schedules, team registrations, and real-time score tracking across multiple venues.",
    solution:
      "Developed a full-stack application with real-time data synchronization, intuitive dashboard interfaces, and mobile-responsive design to ensure accessibility for coaches, players, and administrators.",
    results: [
      "Reduced event setup time by 60%",
      "Increased user engagement by 45%",
      "Successfully managed 100+ tournaments in first year",
      "Received 4.8/5 user satisfaction rating",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSocket",
      "Tailwind CSS",
    ],
    role: "Full-Stack Developer & UI/UX Designer",
    timeline: "6 months (Ongoing)",
  },
  {
    title: "Midst",
    slug: "midst",
    description:
      "A Christian faith app designed to help users grow spiritually through guided reflections, prayer prompts, and community connection.",
    tags: ["React", "Firebase", "Tailwind", "FaithTech", "UI/UX"],
    thumbnail: "/src/assets/Midst.png",
    link: "https://github.com/gabeinf/Midst",
    linkType: "github",
    overview:
      "Midst is a minimalist and immersive faith-based application that helps users connect with God through scripture-based meditations, journaling tools, and meaningful community engagement. The app’s atmosphere focuses on calm design, gentle animation, and spiritual mindfulness.",
    challenge:
      "Creating a digital space that feels peaceful and sacred — combining clean UX with faith-driven interaction — while keeping it modern and personal, not commercialized.",
    solution:
      "Designed and developed a spiritual app experience using React and Firebase. Built daily scripture reflections, custom prayer reminders, and a private journal synced securely in the cloud. Integrated Framer Motion animations to evoke stillness and contemplation within a fluid interface.",
    results: [
      "Developed guided reflection system with daily devotionals",
      "Integrated real-time prayer journal sync via Firebase",
      "Created a visually calm interface inspired by minimalist Christian art",
      "Tested positive with early users for emotional resonance and simplicity",
    ],
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
    role: "Lead Designer & Full-Stack Developer",
    timeline: "4 months (In Progress)",
  },
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "An interactive portfolio showcasing 3D visuals, motion graphics, and coding projects.",
    tags: ["React", "Vite", "Three.js", "Framer Motion", "Frontend"],
    thumbnail: "/src/assets/Portfolio.png",
    overview:
      "A digital portfolio merging motion graphics and code to showcase both creative and technical expertise. The design focuses on smooth transitions, interactive 3D scenes, and clear storytelling.",
    challenge:
      "Creating a portfolio that effectively bridges artistic and technical disciplines while performing smoothly across devices.",
    solution:
      "Developed using React and Vite with Framer Motion for animations, Tailwind for styling, and Three.js for 3D visuals. Integrated sections for projects, VFX videos, and tech case studies.",
    results: [
      "Achieved 100% Lighthouse performance score",
      "Reduced bounce rate by 35%",
      "Featured in creative coding showcases",
      "Designed entirely from scratch using custom animations",
    ],
    technologies: [
      "React",
      "Vite",
      "Framer Motion",
      "Tailwind CSS",
      "Three.js",
      "Canvas API",
    ],
    role: "Designer & Developer",
    timeline: "2 months",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
