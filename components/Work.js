import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

const DEVICON_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const Skills = ({ title, cards, techStack }) => {
	return (
		<div id="skills" className="skills-section py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icon={value.icon}
							link={value.link} />
					))}
				</div>
				<div id="tech-stack" className="tech-stack-container mt-5">
					<h1 className="text-primary fw-bold">Tech Stack</h1>
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
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="projects-section py-5 px-5">
			<div className="container projects-container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="projects-grid">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							images={value.images}
							image={value.image}
							github={value.github}
							demo={value.demo} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Card = ({ title, description, image, images, github, demo, icon }) => {
	return (
		<div className={`card py-3 px-3 my-3 card-work ${github || demo ? 'project-card' : 'skill-card'}`}>
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
			) : image && (
				<img className="card-project-image mb-3" src={image} alt={`${title} project preview`} loading="lazy" />
			)}
			{icon && (
				<div className="skill-icon mb-3" aria-hidden="true">
					<FontAwesomeIcon icon={icon} />
				</div>
			)}
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="d-flex flex-wrap gap-2 mt-auto">
				{demo && (
					<Link href={demo}>
						<a className="btn btn-primary btn-sm" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="me-1" /> Live demo
						</a>
					</Link>
				)}
				{github && (
					<Link href={github}>
						<a className="btn btn-outline-primary btn-sm" target="_blank" rel="noreferrer">
							<FontAwesomeIcon icon={faGithub} className="me-1" /> GitHub
						</a>
					</Link>
				)}
			</div>
		</div>
	);
}