
import profile from './profile.png';
import { faGithub, faLinkedin, faNodeJs, faReact, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faCode, faDatabase, faEnvelope, faMobileScreenButton, faPhone, faWrench } from '@fortawesome/free-solid-svg-icons';

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
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Tech Stack",
      link: "#tech-stack",
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
  title: "Leul Samson",
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
      title: "Programming Languages",
      description: "Python, JavaScript, TypeScript, Java, PHP, HTML5, and CSS3.",
      icon: faCode,
    },
    {
      title: "Frontend Development",
      description: "React, Next.js, and Bootstrap for responsive, accessible, and polished user interfaces.",
      icon: faReact,
    },
    {
      title: "Mobile & Desktop App Development",
      description: "React Native, Flutter, C#, and Visual Basic .NET for practical cross-platform mobile and desktop solutions.",
      icon: faMobileScreenButton,
    },
    {
      title: "Backend & APIs",
      description: "Node.js and Express for dependable backend services, REST APIs, authentication, and practical application workflows.",
      icon: faNodeJs,
    },
    {
      title: "Databases",
      description: "PostgreSQL, MySQL, MongoDB, and Firebase for structured data, persistence, and application services.",
      icon: faDatabase,
    },
    {
      title: "AI & Machine Learning",
      description: "Python, NumPy, Pandas, Scikit-learn, and H2O.ai for data analysis, supervised learning, classification, and model evaluation.",
      icon: faBrain,
    },
    {
      title: "Tools & Technologies",
      description: "Git, GitHub, Docker, and Visual Studio Code for version control, collaboration, containerized delivery, and productive development.",
      icon: faWrench,
    },
  ],
}

export const techStack = [
  { name: "Python", icon: "python/python-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "Java", icon: "java/java-original.svg" },
  { name: "PHP", icon: "php/php-original.svg" },
  { name: "HTML5", icon: "html5/html5-original-wordmark.svg" },
  { name: "CSS3", icon: "css3/css3-original-wordmark.svg" },
  { name: "React", icon: "react/react-original-wordmark.svg" },
  { name: "Next.js", icon: "nextjs/nextjs-original.svg" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original-wordmark.svg" },
  { name: "Node.js", icon: "nodejs/nodejs-original-wordmark.svg" },
  { name: "Express", icon: "express/express-original.svg" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original-wordmark.svg" },
  { name: "MySQL", icon: "mysql/mysql-original-wordmark.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original-wordmark.svg" },
  { name: "Firebase", icon: "firebase/firebase-plain.svg" },
  { name: "Flutter", icon: "flutter/flutter-original.svg" },
  { name: "C#", icon: "csharp/csharp-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg" },
  { name: "Docker", icon: "docker/docker-original-wordmark.svg" },
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
]

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