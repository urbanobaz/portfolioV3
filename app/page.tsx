'use client';
import React from 'react';
import Head from 'next/head';
import { Quicksand } from 'next/font/google';
import Image from 'next/image';
import headshot from '../public/finalheadshotedit.png';
import styles from '../styles/Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
      <footer className="my-10">
        <div className="w-100 flex justify-center">
          <hr className="h-0.5 my-8 bg-gray-300 w-1/2" />
        </div>
        <ul className="flex justify-center" id="social">
          <li className="mx-5">
            <a className={styles.link} href="https://twitter.com/ubaz_3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="mx-5">
            <a className={styles.link} href="https://github.com/urbanobaz">
              <i className="fab fa-github"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="mx-5">
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/urbanobaz"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
        <p className="flex justify-center mt-5">
          &copy; {year} Urbano Baz. All rights reserved.
        </p>
      </footer>
    </>
  );
}
