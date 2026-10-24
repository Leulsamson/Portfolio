import React from 'react';
import Link from 'next/link'

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="hero-section">
			<div className="container hero-content">
				<div className=" row align-items-center">
					<div className="col-sm-6">
						<p className="hero-label mb-3">Software Engineer</p>
						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p>{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image" width="250"
							height="250" src={image}
							alt="profile of Leul Samson"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="about-section py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="about-content px-sm-5">
					{description.map((value, index) => (
						<p key={index} >{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}