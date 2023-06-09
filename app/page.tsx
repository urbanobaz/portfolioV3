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
import { faSun } from '@fortawesome/free-solid-svg-icons';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { cn } from './helpers/utils';

export default function Home() {
  return (
    <>
      <Head>
        <title>Urbano's portfolio</title>
        <meta name="description" content="Urbano's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className={cn(styles.content, 'px-10')}>
        <div className={styles.contentWrapper}>
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
              <p className="w-11/12">
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
      </div>

      <section id="about" className="flex justify-center mt-20">
        <div className="left-0 w-10/12 md:w-1/2">
          <h3 className="text-xl font-semibold mb-5">Who am I?</h3>
          <p className="mb-2">
            Based in sunny <strong>Miami Florida</strong>,{' '}
            <strong>Florida State University</strong> graduate. Fell in love
            with computer science when I took <strong>CS50x</strong> at{' '}
            <strong>Miami Dade College</strong> back in 2018 and didn't look
            back. I couldn't get enough of what I was learning and the things I
            was building.
          </p>
          <p>
            A year of learning lead me back to where it all started, with{' '}
            <strong>CS50x</strong>, as a Teaching Fellow this time around.
            Teaching the course that made me fall in love with computer science
            in the first place.
            <strong> 160+</strong> students over 5 cohorts
          </p>
        </div>
      </section>

      <section id="projects" className="flex justify-center mt-20">
        <div className="left-0 w-10/12 md:w-1/2">
          <h3 className="flex flex-col text-xl font-semibold mb-5">Projects</h3>
          <ul className="flex flex-col list-disc ml-6">
            <Link href={'/projects/1'}>
              <li>Books & More</li>
            </Link>
            <Link href={'/projects/2'}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
