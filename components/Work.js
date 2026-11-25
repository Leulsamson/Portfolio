import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const DEVICON_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const Skills = ({ title, cards, techStack }) => {
  return (
    <section id="skills" className="skills-section section-pad">
      <div className="container">
        <div className="section-header mb-4">
          <h2 className="section-heading fw-bold mb-2">{title}</h2>
        </div>
        <div className="skills-grid">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              link={value.link}
            />
          ))}
        </div>
        <div id="tech-stack" className="tech-stack-container mt-5">
          <h3 className="tech-stack-heading fw-bold mb-4">Tech Stack</h3>
          <div className="tech-stack-grid" aria-label="Technologies used">
            {techStack.map((technology) => (
              <div className="tech-stack-item" key={technology.name}>
                <img
                  src={`${DEVICON_BASE_URL}/${technology.icon}`}
                  alt={`${technology.name} icon`}
                  loading="lazy"
                />
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <section id="projects" className="projects-section section-pad">
      <div className="container">
        <div className="section-header mb-4">
          <h2 className="section-heading fw-bold mb-2">{title}</h2>
        </div>
        <div className="projects-grid">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              tag={value.tag}
              description={value.description}
              images={value.images}
              image={value.image}
              github={value.github}
              demo={value.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Card = ({ title, tag, description, image, images, github, demo, icon }) => {
  const isProject = Boolean(github || demo);

  return (
    <div className={`card card-work ${isProject ? 'project-card' : 'skill-card'}`}>
      {images ? (
        <div className="project-image-grid mb-3">
          {images.map((projectImage, index) => (
            <img
              key={projectImage}
              className="card-project-image"
              src={projectImage}
              alt={`${title} preview ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        image && (
          <div className="project-image-wrap mb-3">
            <img
              className="card-project-image"
              src={image}
              alt={`${title} project preview`}
              loading="lazy"
            />
          </div>
        )
      )}
      {icon && (
        <div className="skill-icon mb-3" aria-hidden="true">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {tag && <span className="project-tag mb-2">{tag}</span>}
      <h4 className="card-title-text mb-2">{title}</h4>
      <p className="card-desc-text mb-4">{description}</p>
      {isProject && (
        <div className="d-flex flex-wrap gap-2 mt-auto">
          {demo && (
            <Link href={demo}>
              <a className="btn btn-primary btn-sm d-inline-flex align-items-center gap-1" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <span>Live demo</span>
              </a>
            </Link>
          )}
          {github && (
            <Link href={github}>
              <a className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
