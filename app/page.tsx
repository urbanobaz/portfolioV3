'use client';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ImageComponent from '@/components/ImageComponent';
import headshot from '../public/finalheadshotedit.png';
import styles from '../styles/Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Project from '@/components/Project';
import books from '../public/books.png';
import books2 from '../public/books.jpeg';

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <Head>
        <title>Urbano's portfolio</title>
        <meta name="description" content="Urbano's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.content}>
        <aside className={styles.side}>
          <Image
            id="pictureImage"
            className={styles['picture-image']}
            src={headshot}
            alt="Portrait of Urbano Baz"
          />
        </aside>
        <main className={styles.about}>
          <h1 className={styles.name}>Hi, I'm Urbano Baz</h1>
          <hr className={styles.hr} />
          <div className={styles.description}>
            <p>
              I am a software engineer and instructor who loves creating UIs
              with React.
            </p>
          </div>
          <div className={styles.contact}>
            <a className={styles.button} href="mailto:urbanobaz@yahoo.com">
              Get in touch
            </a>
          </div>
          <ul className={styles.social} id="social">
            <li>
              <a className={styles.link} href="https://twitter.com/ubaz_3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="https://github.com/urbanobaz">
                <i className="fab fa-github"></i>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/urbanobaz"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </main>
      </div>
      <h3 className="mt-10 mb-5 flex justify-center text-xl font-semibold">
        Projects
      </h3>
      <div className="flex justify-center">
        <Project
          projectId={1}
          projectTitle="Books & More"
          purpose="Website that keeps track of your books"
          techUsed="Python (Flask) on the backend.
          HTML, CSS, JavaScript on the frontend. Jinja as Flask's templating
          language. Bootstrap as the CSS framework for styling. Heroku for
          hosting."
          imageComponent={
            <ImageComponent
              src={books}
              alt="headshot"
              className={styles['card-image']}
              width={100}
              height={100}
            />
          }
        />
        <Project
          projectId={2}
          projectTitle="Portfolio Page"
          purpose="Website to showcase my projects and skills in tech"
          techUsed="React (NextJS). Deployed on Vercel."
          imageComponent={
            <ImageComponent
              src={books2}
              alt="headshot"
              className={styles['card-image']}
              width={100}
              height={100}
            />
          }
        />
      </div>
      <footer className="my-10">
        <div className="w-100 flex justify-center">
          <hr className="h-0.5 my-7 bg-blue-200 w-1/2 rounded" />
        </div>
        <ul className="flex justify-center" id="social">
          <li className={styles.socialLink}>
            <a href="https://twitter.com/ubaz_3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a href="https://github.com/urbanobaz">
              <i className="fab fa-github"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a href="https://www.linkedin.com/in/urbanobaz">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
        <p className="flex justify-center mt-7">
          &copy; {year} Urbano Baz. All rights reserved.
        </p>
      </footer>
    </>
  );
}
