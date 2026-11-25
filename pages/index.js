import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Credentials } from '../components/Credentials';
import { Skills, Projects } from '../components/Work';
import { Footer } from '../components/Footer';
import {
  about,
  contact,
  credentials,
  intro,
  navigation,
  projects,
  SEO,
  techStack,
  work,
} from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <main>
        <Intro
          role={intro.role}
          title={intro.title}
          description={intro.description}
          image={intro.image}
          highlights={intro.highlights}
          buttons={intro.buttons}
        />
        <About
          title={about.title}
          description={about.description}
          timeline={about.timeline}
        />
        <Credentials
          title={credentials.title}
          subtitle={credentials.subtitle}
          items={credentials.items}
        />
        <Skills
          title={work.title}
          cards={work.cards}
          techStack={techStack}
        />
        <Projects
          title={projects.title}
          cards={projects.cards}
        />
      </main>
      <Footer links={contact.buttons} description={contact.description} />
    </Fragment>
  );
}
