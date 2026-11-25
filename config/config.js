import {
  faGithub,
  faLinkedin,
  faNodeJs,
  faReact,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAward,
  faBrain,
  faCertificate,
  faCode,
  faDatabase,
  faEnvelope,
  faFileLines,
  faGraduationCap,
  faMobileScreenButton,
  faPhone,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: 'Leul Samson',
  links: [
    { title: 'About', link: '#about' },
    { title: 'Credentials', link: '#credentials' },
    { title: 'Skills', link: '#skills' },
    { title: 'Projects', link: '#projects' },
    { title: 'Contact', link: '#contact' },
    { title: 'Links', link: '/links' },
  ],
};

export const intro = {
  role: 'Software Engineer · BSc (3.65 CGPA)',
  title: 'Leul Samson',
  description:
    'Software Engineer building full-stack web applications, enterprise ERP deployments, and reliable digital tools for real-world operations.',
  image: '/profile-photo.jpg',
  highlights: [
    { label: 'Degree', value: 'BSc Software Engineering' },
    { label: 'CGPA', value: '3.65 / 4.00' },
    { label: 'Exit Exam', value: '86.25% (Pass)' },
    { label: 'Location', value: 'Addis Ababa, ET' },
  ],
  buttons: [
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume (PDF)',
      link: '/Leul_Samson_CV.pdf',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Profile & Background',
  description: [
    'I am Leul Samson, a Software Engineer graduated from Injibara University with a BSc in Software Engineering (CGPA 3.65) and an 86.25% score on the National Exit Examination.',
    'During my internship at the Addis Ababa Innovation and Technology Development Bureau, I built and tested features for a Hospital Management System, integrated databases, and collaborated with the R&D team on machine-learning patient-survival experiments.',
    'I now design and deliver full-stack web applications, containerized ERP systems, and cross-platform tools with a focus on clean architecture, reliability, and clear communication.',
  ],
  timeline: [
    {
      period: '2026',
      title: 'BSc in Software Engineering',
      org: 'Injibara University',
      detail: 'Graduated with 3.65 CGPA and 86.25% National Exit Exam score.',
    },
    {
      period: 'Jan – May 2025',
      title: 'Software Engineer Intern',
      org: 'Addis Ababa Innovation & Technology Development Bureau',
      detail: 'Developed Hospital Management System modules, database integrations, and ML survival experiments.',
    },
    {
      period: '2021',
      title: 'Secondary School Leaving Examination',
      org: 'Sire Preparatory School',
      detail: 'Completed preparatory education (406/700 SSLE; Very Great Distinction in EGSECE).',
    },
  ],
};

export const credentials = {
  title: 'Credentials & Academic Records',
  subtitle:
    'Verified university recommendation, training certificates, national exit examination result, and official educational transcripts.',
  items: [
    {
      id: 'recommendation',
      category: 'Endorsement',
      title: 'Recommendation Letter',
      meta: 'Injibara University · June 27, 2026',
      description:
        'Official department recommendation from Amsalu Tessema (MSc), Head of Software Engineering at Injibara University.',
      actionLabel: 'View Letter',
      icon: faFileLines,
      type: 'images',
      files: [
        {
          src: '/documents/recommendation-letter.jpg',
          caption: 'Official Recommendation Letter — Head of Software Engineering, Injibara University',
        },
      ],
    },
    {
      id: 'certificates',
      category: 'Training (2)',
      title: 'Certificates',
      meta: 'Life Skills & Youth Entrepreneurship',
      description:
        'View both the Life Skills Training (Dept. of Psychology) and Youth Entrepreneurship Training (EDBIC) certificates together.',
      actionLabel: 'View Both Certificates',
      icon: faCertificate,
      type: 'images',
      files: [
        {
          src: '/documents/certificate-life-skills.jpg',
          caption: 'Certificate of Participation — Life Skills Training (April 2026)',
        },
        {
          src: '/documents/certificate-entrepreneurship.jpg',
          caption: 'Certificate of Completion — Youth Entrepreneurship Training (June 2018 E.C)',
        },
      ],
    },
    {
      id: 'exit-exam',
      category: 'National Exam',
      title: 'Exit Exam Results',
      meta: '86.25% · PASS · Software Engineering',
      description:
        'Official FDRE Ministry of Education Exit Examination Certificate (2018 End Year) with verification QR.',
      actionLabel: 'View Result',
      icon: faAward,
      type: 'pdf',
      pdfSrc: '/documents/exit-exam-certificate.pdf',
      summary: [
        { label: 'Candidate', value: 'Leul Samson Fekadu' },
        { label: 'Institution', value: 'Injibara University' },
        { label: 'Exam Topic', value: 'Software Engineering' },
        { label: 'Score & Status', value: '86.25% — PASS' },
      ],
    },
    {
      id: 'education-files',
      category: '6 Records',
      title: 'Educational Files & Transcripts',
      meta: 'University Degree through Grade 8',
      description:
        'Complete 6-page academic dossier: BSc Temporary Graduation Certificate, SSLE, EGSECE, Grade 8–12 transcripts.',
      actionLabel: 'Open Academic Files',
      icon: faGraduationCap,
      type: 'pdf',
      pdfSrc: '/documents/educational-credentials.pdf',
      summary: [
        { label: 'Page 1', value: 'BSc Software Engineering Temporary Certificate (CGPA 3.65, Exit Exam 86.25%)' },
        { label: 'Page 2', value: 'Secondary School Leaving Examination (SSLE, 2021 / 2013 E.C)' },
        { label: 'Page 3', value: 'Ethiopian General Secondary Education Certificate (Very Great Distinction)' },
        { label: 'Pages 4–6', value: 'Grade 8 Regional Certificate, Grade 9–10 & Grade 11–12 Transcripts' },
      ],
    },
  ],
};

export const work = {
  title: 'Skills & Capabilities',
  cards: [
    {
      title: 'Programming Languages',
      description: 'Python, JavaScript, TypeScript, Java, PHP, HTML5, and CSS3.',
      icon: faCode,
    },
    {
      title: 'Frontend Development',
      description: 'React, Next.js, Tailwind CSS, and Bootstrap for responsive, accessible user interfaces.',
      icon: faReact,
    },
    {
      title: 'Mobile & Desktop Apps',
      description: 'React Native, Flutter, C#, and Visual Basic .NET for cross-platform and desktop solutions.',
      icon: faMobileScreenButton,
    },
    {
      title: 'Backend & APIs',
      description: 'Node.js, Express.js, REST APIs, JWT authentication, and Zod validation workflows.',
      icon: faNodeJs,
    },
    {
      title: 'Databases & Messaging',
      description: 'PostgreSQL, MySQL, MongoDB, Firebase, Redis, and Kafka for reliable persistence.',
      icon: faDatabase,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Python, NumPy, Pandas, Scikit-learn, and H2O.ai for predictive modeling and evaluation.',
      icon: faBrain,
    },
    {
      title: 'DevOps & Tooling',
      description: 'Git, GitHub, Docker, Compose, Jira, Postman, and VS Code for disciplined delivery.',
      icon: faWrench,
    },
  ],
};

export const techStack = [
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'PHP', icon: 'php/php-original.svg' },
  { name: 'HTML5', icon: 'html5/html5-original-wordmark.svg' },
  { name: 'CSS3', icon: 'css3/css3-original-wordmark.svg' },
  { name: 'React', icon: 'react/react-original-wordmark.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original-wordmark.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original-wordmark.svg' },
  { name: 'Express', icon: 'express/express-original.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original-wordmark.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original-wordmark.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original-wordmark.svg' },
  { name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
  { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
  { name: 'C#', icon: 'csharp/csharp-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', icon: 'github/github-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original-wordmark.svg' },
  { name: 'VS Code', icon: 'vscode/vscode-original.svg' },
];

export const projects = {
  title: 'Selected Projects',
  cards: [
    {
      title: 'EtFruit ERPNext Platform',
      tag: 'Enterprise ERP · Docker',
      description:
        'Containerized Frappe and ERPNext deployment for EtFruit operations with Nginx, Gunicorn, MariaDB, Redis, and background workers.',
      image: '/etfruit-preview.svg',
      github: 'https://github.com/AG-Technology/erp-next-etfruit',
    },
    {
      title: 'Licence Management System',
      tag: 'Full-Stack · React & PostgreSQL',
      description:
        'Full-stack licence management platform digitizing registration, application processing, approval, and renewal workflows.',
      image: '/licence-mng-1.png',
      github: 'https://github.com/Leulsamson/licence-management-system',
      demo: 'https://licence-management-system-one.vercel.app',
    },
    {
      title: 'Hospital Management System',
      tag: 'Next.js · Prisma & TypeScript',
      description:
        'Role-based clinical and pharmacy management application built with Next.js, TypeScript, Prisma, Zod, and PostgreSQL.',
      image: '/hms.png',
      github: 'https://github.com/Leulsamson/hospital-management-system',
      demo: 'https://hospital-management-system-snowy-nu.vercel.app',
    },
    {
      title: 'Utility Damage Reporting System',
      tag: 'Web & Mobile · React Native',
      description:
        'Cross-platform reporting system for tracking water, electricity, and road utility damage with JWT authentication.',
      image: '/smart.jpg',
      github: 'https://github.com/Leulsamson/utility-damage-reporting-system',
    },
    {
      title: 'Municipality Land Administration',
      tag: 'Desktop · VB.NET & SQL Server',
      description:
        'Desktop land administration system for managing property registration, ownership transfers, payments, and reports.',
      image: '/municipality-2.png',
      github:
        'https://github.com/Leulsamson/municipality-land-administration-system-for-organizations',
    },
    {
      title: 'Leulsamson GitHub Profile',
      tag: 'Open Source',
      description:
        'Profile configuration, engineering overview, and documentation for my open-source repositories.',
      github: 'https://github.com/Leulsamson/Leulsamson',
    },
  ],
};

export const contact = {
  title: 'Get in touch',
  email: 'leuls4345@gmail.com',
  description:
    'Available for software engineering roles, full-stack consulting, and technical collaboration.',
  buttons: [
    {
      title: 'leuls4345@gmail.com',
      link: 'mailto:leuls4345@gmail.com',
      icon: faEnvelope,
      isPrimary: true,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/leul-samson-6373b8319/',
      icon: faLinkedin,
      isPrimary: false,
    },
    {
      title: 'X',
      link: 'https://x.com/LeulSamson26569',
      icon: faTwitter,
      isPrimary: false,
    },
    {
      title: 'Telegram',
      link: 'https://t.me/Leulsamsss',
      icon: faTelegram,
      isPrimary: false,
    },
    {
      title: 'Call Me',
      link: 'tel:+251922774372',
      icon: faPhone,
      isPrimary: false,
    },
  ],
};

export const SEO = {
  title: "Leul Samson — Software Engineer",
  description:
    'Software Engineer building full-stack web applications, ERPNext deployments, and practical digital tools.',
  image: '/profile-photo.jpg',
};

export const links = {
  image: '/profile-photo.jpg',
  title: 'Leul Samson',
  description: 'Software Engineer · Full-Stack Developer',
  cards: [
    {
      title: 'My GitHub',
      link: 'https://github.com/Leulsamson/',
      icon: faGithub,
    },
    {
      title: 'Email: leuls4345@gmail.com',
      link: 'mailto:leuls4345@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/leul-samson-6373b8319/',
      icon: faLinkedin,
    },
    {
      title: 'X',
      link: 'https://x.com/LeulSamson26569',
      icon: faTwitter,
    },
    {
      title: 'Telegram',
      link: 'https://t.me/Leulsamsss',
      icon: faTelegram,
    },
    {
      title: 'Call: +251 922 774 372',
      link: 'tel:+251922774372',
      icon: faPhone,
    },
  ],
};
