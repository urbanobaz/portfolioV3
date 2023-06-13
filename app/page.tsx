'use client';
import React from 'react';
import Image from 'next/image';
import headshot from '../public/finalheadshotedit.png';
import styles from '../styles/Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { cn } from './helpers/utils';

export default function Home() {
  return (
    <>
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
                loading="lazy"
              />
            </Link>
          </aside>

          <div className={styles.about}>
            <h1 className={styles.name}>Hi, I'm Urbano Baz</h1>
            <hr className={styles.hr} />
            <div className={styles.description}>
              <p>
                A software engineer who loves creating beautiful and accessible
                UIs with React.
              </p>
            </div>
            <div className={styles.contact}>
              <a className={styles.button} href="mailto:urbanobaz@yahoo.com">
                Get in touch
              </a>
            </div>
            <ul className={styles.social} id="social">
              <li>
                <a
                  className={styles.link}
                  href="https://github.com/urbanobaz"
                  aria-label="Link to Urbano's Github"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/urbanobaz"
                  aria-label="Link to Urbano's LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://www.youtube.com/@ubazdevelops"
                  aria-label="Link to Urbano's Youtube"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  className={styles.link}
                  href="https://twitter.com/ubaz_3"
                  aria-label="Link to Urbano's Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section
        id="about"
        className={cn(styles.sectionContainer, 'flex justify-center mt-20')}
      >
        <div className={cn(styles.sectionWrapper, 'left-0 w-full')}>
          <h2 className="text-xl font-semibold mb-5">Who am I?</h2>
          <p className="mb-4">
            Based in sunny Miami Florida. A Florida State University graduate in
            Finance that fell in love with computer science when I took{' '}
            <a
              href="https://cs50.harvard.edu/x/2023/"
              className="text-blue-600 hover:font-medium"
            >
              CS50x
            </a>
            . I couldn't get enough of what I was learning and the things I was
            building.
          </p>
          <p className="mb-4">
            In 2019 I started working as Teaching Fellow with the{' '}
            <a
              href="https://mdcthereporter.com/the-idea-center-to-offer-computer-science-masterclass-cs50x-miami/"
              className="text-blue-600 hover:font-medium"
            >
              CS50x
            </a>{' '}
            program at Miami Dade College. Teaching the course that made me fall
            in love with computer science in the first place. Over 2.5 years
            working as an instructor and coordinator I worked with 160+ students
            over 5 cohorts.
          </p>
          <p>
            In 2021 I got my first role as a software engineer with{' '}
            <a
              href="https://gohopscotch.com/"
              className="text-blue-600 hover:font-medium"
            >
              Hopscotch
            </a>{' '}
            working mostly on the frontend with React/TypeScript.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className={cn(styles.sectionContainer, 'flex justify-center mt-20')}
      >
        <div className={cn(styles.sectionWrapper, 'left-0 w-full')}>
          <h2 className="flex flex-col text-xl font-semibold mb-5">Projects</h2>
          <ul className="flex flex-col list-disc ml-6">
            <li>
              <Link href={'/projects/1'} className="hover:font-medium">
                Books & More
              </Link>
            </li>

            <li>
              <Link href={'/projects/2'} className="hover:font-medium">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
