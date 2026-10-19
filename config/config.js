
import profile from './profile.png';

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
      image: "https://opengraph.githubassets.com/1/Leulsamson/licence-management-system",
      github: "https://github.com/Leulsamson/licence-management-system",
      demo: "https://licence-management-system-one.vercel.app",
    },
    {
      title: "News Feed Provider",
      description: "A project for collecting and providing news content through a focused application experience.",
      image: "https://opengraph.githubassets.com/1/Leulsamson/News-Feed-Provider",
      github: "https://github.com/Leulsamson/News-Feed-Provider",
    },
    {
      title: "Hospital Management System",
      description: "A web-based system for organizing hospital information and day-to-day management workflows.",
      image: "https://opengraph.githubassets.com/1/Leulsamson/hospital-management-system",
      github: "https://github.com/Leulsamson/hospital-management-system",
      demo: "https://hospital-management-system-snowy-nu.vercel.app",
    },
    {
      title: "Portfolio",
      description: "This responsive portfolio website for presenting my work, background, and contact links.",
      image: "https://opengraph.githubassets.com/1/Leulsamson/Portfolio",
      github: "https://github.com/Leulsamson/Portfolio",
    },
    {
      title: "Leulsamson GitHub Profile",
      description: "Profile configuration and documentation for my GitHub presence.",
      image: "https://opengraph.githubassets.com/1/Leulsamson/Leulsamson",
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
      image: "https://opengraph.githubassets.com/1/Leulsamson/municipality-land-administration-system-for-organizations",
      github: "https://github.com/Leulsamson/municipality-land-administration-system-for-organizations",
    },
    {
      title: "Municipality Land Admin",
      description: "A Visual Basic land administration system focused on municipal data management.",
      image: "https://opengraph.githubassets.com/1/Leulsamson/municipality-land-admin",
      github: "https://github.com/Leulsamson/municipality-land-admin",
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "I am open to conversations about software engineering, collaboration, and new opportunities. Find me on GitHub to connect.",
  buttons: [
    {
      title: "GitHub Profile",
      link: "https://github.com/Leulsamson",
      isPrimary: true,
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
      title: "My website",
      link: "https://leulsamson.github.io/portfolio/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/Leulsamson/",
    },
  ]
}