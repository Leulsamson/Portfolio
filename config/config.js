
import profile from './profile.png';
import { faGithub, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
  description: "A software engineering graduate building full-stack web applications and practical digital tools.",
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
  title: "Who I am",
  description: [
    "I am a software engineering graduate passionate about full-stack development and modern web technologies. I enjoy turning real-world problems into reliable, approachable software.",
    "My work spans web applications, management systems, data-driven tools, and developer-focused projects. I value clear interfaces, maintainable code, and learning through hands-on building.",
    "When I am not coding, I enjoy continuing my learning journey and exploring ideas that make technology more useful for people and communities.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I build mobile experiences with a focus on useful, approachable interfaces.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive web applications with modern JavaScript tooling.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Licence Management System",
      description: "A full-stack licence management application for organizing licence records and workflows.",
      images: ["/licence-mng-1.png", "/licence-mng-2.png", "/licence-mng-3.png"],
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
      title: "Portfolio",
      description: "This responsive portfolio website for presenting my work, background, and contact links.",
      github: "https://github.com/Leulsamson/Portfolio",
    },
    {
      title: "Leulsamson GitHub Profile",
      description: "Profile configuration and documentation for my GitHub presence.",
      github: "https://github.com/Leulsamson/Leulsamson",
    },
    {
      title: "Utility Damage Reporting System",
      description: "A reporting system designed to help track and manage utility damage cases.",
      images: ["/smart.jpg", "/smart1.jpg"],
      github: "https://github.com/Leulsamson/utility-damage-reporting-system",
    },
    {
      title: "Municipality Land Administration System",
      description: "A land administration system for managing municipal records and organization workflows.",
      images: ["/municipality-1.png", "/municipality-2.png", "/municipality-3.png"],
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
  title: "Leul Samson | Software Engineer",
  description: "Software engineering graduate building full-stack web applications and practical digital tools.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Leul Samson",
  description: "Software Engineering Graduate | Full-stack Developer",
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