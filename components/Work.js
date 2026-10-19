import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							image={value.image}
							images={value.images}
							github={value.github}
							demo={value.demo} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, image, images, github, demo }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
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