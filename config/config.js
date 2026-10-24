
import profile from './profile.png';
import { faDocker, faGithub, faLinkedin, faReact, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faDatabase, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Leul",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Hey, I'm Leul",
  description: "Software Engineer building full-stack applications, practical digital tools, and reliable solutions for real-world problems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "/Leul_Samson_CV.pdf",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Profile",
  description: [
    "I am Leul Samson, a Software Engineer with a strong interest in technology and software development. I am highly motivated, hardworking, and focused on building useful software that addresses real-world needs.",
    "I earned a BSc. in Software Engineering from Injibara University in 2026 with a CGPA of 3.65 and an exit exam result of 86.25%. My education strengthened my foundation in software design, development, databases, and problem solving.",
    "I work as a freelance Software Engineer, helping individuals and organizations turn their ideas into practical, reliable software. I design and develop responsive web applications, backend systems, and digital tools tailored to each client's needs, while maintaining clear communication throughout the development process.",
  ],
}

export const work = {
  title: "Skills",
  cards: [
    {
      title: "Full-Stack Web Development",
      description: "I build responsive applications with React, Next.js, TypeScript, Node.js, and Express, from polished interfaces to dependable APIs.",
      icon: faReact,
    },
    {
      title: "Backend & Database Systems",
      description: "I design practical backend systems with PostgreSQL, MySQL, Prisma, SQL Server, authentication, validation, and maintainable data models.",
      icon: faDatabase,
    },
    {
      title: "AI & Machine Learning",
      description: "I explore machine-learning solutions for real-world problems and continue developing my expertise in AI, data-driven tools, and research.",
      icon: faBrain,
    },
    {
      title: "Deployment & Software Delivery",
      description: "I use Git, Docker, and cloud deployment workflows to ship reliable projects and turn ideas into accessible software.",
      icon: faDocker,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Licence Management System",
      description: "A full-stack licence management application for organizing licence records and workflows.",
      image: "/licence-mng-1.png",
      github: "https://github.com/Leulsamson/licence-management-system",
      demo: "https://licence-management-system-one.vercel.app",
    },
    {
      title: "Hospital Management System",
      description: "A web-based system for organizing hospital information and day-to-day management workflows.",
      image: "/hms.png",
      github: "https://github.com/Leulsamson/hospital-management-system",
      demo: "https://hospital-management-system-snowy-nu.vercel.app",
    },
    {
      title: "Leulsamson GitHub Profile",
      description: "Profile configuration and documentation for my GitHub presence.",
      github: "https://github.com/Leulsamson/Leulsamson",
    },
    {
      title: "Utility Damage Reporting System",
      description: "A reporting system designed to help track and manage utility damage cases.",
      image: "/smart.jpg",
      github: "https://github.com/Leulsamson/utility-damage-reporting-system",
    },
    {
      title: "Municipality Land Administration System",
      description: "A land administration system for managing municipal records and organization workflows.",
      image: "/municipality-2.png",
      github: "https://github.com/Leulsamson/municipality-land-administration-system-for-organizations",
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "I am open to conversations about software engineering, collaboration, and new opportunities.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:Leuls4345@gmail.com",
      icon: faEnvelope,
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/leul-samson-6373b8319/",
      icon: faLinkedin,
      isPrimary: false,
    },
    {
      title: "X",
      link: "https://x.com/LeulSamson26569",
      icon: faTwitter,
      isPrimary: false,
    },
    {
      title: "Telegram",
      link: "https://t.me/Leulsamsss",
      icon: faTelegram,
      isPrimary: false,
    },
    {
      title: "Call Me",
      link: "tel:+251922774372",
      icon: faPhone,
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Leul Samson's Portfolio",
  description: "Software Engineer building full-stack web applications and practical digital tools.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Leul Samson",
  description: "Software Engineer | Full-stack Developer",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/Leulsamson/",
      icon: faGithub,
    },
    {
      title: "Email Me",
      link: "mailto:Leuls4345@gmail.com",
      icon: faEnvelope,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/leul-samson-6373b8319/",
      icon: faLinkedin,
    },
    {
      title: "X",
      link: "https://x.com/LeulSamson26569",
      icon: faTwitter,
    },
    {
      title: "Telegram",
      link: "https://t.me/Leulsamsss",
      icon: faTelegram,
    },
    {
      title: "Call Me",
      link: "tel:+251922774372",
      icon: faPhone,
    },
  ]
}