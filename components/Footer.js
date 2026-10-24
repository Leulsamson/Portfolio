import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Footer = ({ links = [] }) => {
	return (
		<footer id="contact" className="site-footer py-5 px-4">
			<div className="container">
				<div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
					<div>
						<p className="footer-kicker mb-2">LET&apos;S CONNECT</p>
						<h2 className="text-white fw-bold mb-2">Contact Me</h2>
						<small className="footer-muted">Leul Samson · Software Engineer</small>
					</div>
					<div className="footer-links" aria-label="Contact links">
						{links.map((value) => (
							<Link key={value.title} href={value.link}>
								<a className="footer-link" target="_blank" rel="noreferrer">
									{value.icon && <FontAwesomeIcon icon={value.icon} aria-hidden="true" />}
									<span>{value.title}</span>
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className="footer-bottom mt-4 pt-3">
					<small>&copy; {new Date().getFullYear()} Leul Samson.</small>
				</div>
			</div>
		</footer>
	);
}