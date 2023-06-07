'use client';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import headshot from '../public/finalheadshotedit.png';
import styles from '../styles/Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Urbano's portfolio</title>
        <meta name="description" content="Urbano's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.content}>
        <aside className={styles.side}>
          <Link className="cursor-pointer" href={'/'}>
            <Image
              id="pictureImage"
              className={styles['picture-image']}
              src={headshot}
              alt="Portrait of Urbano Baz"
            />
          </Link>
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
        <ul className="flex flex-col left-0 w-1/2 list-disc">
          <Link href={'/projects/1'}>
            <li>Books & More</li>
          </Link>
          <li>Portfolio</li>
        </ul>
      </div>
    </>
  );
}
