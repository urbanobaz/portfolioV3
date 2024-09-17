'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
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
import TechStack from '@/components/TechStack';
import { cn } from './helpers/utils';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={cn(styles.content, 'px-10 flex flex-col')}>
        <div className={styles.contentWrapper}>
          <AnimatePresence>
            <aside className={styles.side}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.4 }}
              >
                <Link className="cursor-pointer" href={'/'}>
                  <CldImage
                    id="pictureImage"
                    className={styles['picture-image']}
                    src="https://res.cloudinary.com/dfrugnsw9/image/upload/v1685401832/finalheadshotedit_tfqes4.png"
                    alt="Portrait of Urbano Baz"
                    width={300}
                    height={300}
                  />
                </Link>
              </motion.div>
            </aside>

            <div className={styles.about}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.55 }}
              >
                <h1 className={styles.name}>Hi, I'm Urbano Baz</h1>
                <hr className={styles.hr} />
                <div className={styles.description}>
                  <p className={styles.subText}>
                    A software engineer who loves creating beautiful and
                    accessible UIs with React.
                  </p>
                </div>
                <div className={styles.contact}>
                  <a
                    className={styles.button}
                    href="mailto:urbanobaz@yahoo.com"
                  >
                    Get in touch
                  </a>
                </div>
              </motion.div>

              <ul className={styles.social} id="social">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.2 }}
                >
                  <li>
                    <a
                      className={styles.link}
                      href="https://github.com/urbanobaz"
                      aria-label="Link to Urbano's Github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.25 }}
                >
                  <li>
                    <a
                      className={styles.link}
                      href="https://www.linkedin.com/in/urbanobaz"
                      aria-label="Link to Urbano's LinkedIn"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.3 }}
                >
                  <li>
                    <a
                      className={styles.link}
                      href="https://www.youtube.com/@ubazdevelops"
                      aria-label="Link to Urbano's Youtube"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: 0.35 }}
                >
                  <li>
                    <a
                      className={styles.link}
                      href="https://twitter.com/ubaz_3"
                      aria-label="Link to Urbano's Twitter"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                </motion.div>
              </ul>
            </div>
          </AnimatePresence>
        </div>
      </div>

      <section
        id="about"
        className={cn(styles.sectionContainer, 'flex justify-center')}
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
            .
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
            over 5 cohorts usually between the ages of 18 and 30.
          </p>
          <p>
            In 2021 I got my first role as a software engineer with{' '}
            <a
              href="https://gohopscotch.com/"
              className="text-blue-600 hover:font-medium"
            >
              Hopscotch
            </a>{' '}
            working on their customer facing payments platform and their
            internal operations application.
          </p>
        </div>
      </section>

      <section
        id="work"
        className={cn(styles.sectionContainer, 'flex justify-center w-full')}
      >
        <div className='max-w-[980px] w-full mt-[80px]'>
          <h2 className="flex flex-col text-xl font-semibold mb-5">Work</h2>
          <div className={cn(styles.workRow, 'flex mb-[16px]')}>
            <p className={cn('w-[100px]', styles.timeText)}>2023-now</p>
            <div className={styles.arrowDiv}>→</div>
            <div className={cn('w-[26px] h-[26px] border-[1px] border-black rounded-full mr-[26px]', styles.circleDiv)} />
            <div className={styles.hrWrapper}>
              <hr className={cn(styles.hrLine, 'h-[18px] w-[1px] bg-slate-900')} />
            </div>
            <p className={styles.employerText}>Frontend Developer, <a href='https://tirerack.com' className='underline underline-offset-4'>Tirerack</a></p>
          </div>
          <div className={cn(styles.workRow, 'flex mb-[16px]')}>
            <p className={cn('w-[100px]', styles.timeText)}>2021-2023</p>
            <div className={styles.arrowDiv}>→</div>
            <div className={cn('w-[26px] h-[26px] border-[1px] border-black rounded-full mr-[26px]', styles.circleDiv)} />
            <div className={styles.hrWrapper}>
              <hr className={cn(styles.hrLine, 'h-[18px] w-[1px] bg-slate-900')} />
            </div>
            <p className={styles.employerText}>Software Engineer, <a href='https://gohopscotch.com' className='underline underline-offset-4'>Hopscotch</a></p>
          </div>
          <div className={cn(styles.workRow, 'flex mb-[16px]')}>
            <p className={cn('w-[100px]', styles.timeText)}>2019-2021</p>
            <div className={styles.arrowDiv}>→</div>
            <div className={cn('w-[26px] h-[26px] border-[1px] border-black rounded-full mr-[26px]', styles.circleDiv)} />
            <p className={styles.employerText}>Instructor, <a href='https://theideacenter.co/' className='underline underline-offset-4'>The Idea Center at Miami Dade College</a></p>
          </div>
        </div>
      </section>

      <section
        id="tech"
        className={cn(styles.sectionContainer, 'flex justify-center')}
      >
        <div className={cn(styles.sectionWrapper, 'left-0 w-full')}>
          <h2 className="flex flex-col text-xl font-semibold mb-5">
            Tech Stack
          </h2>
          <div className="w-full flex">
            <div className="w-full">
              <TechStack />
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={cn(styles.sectionContainer, 'flex justify-center')}
      >
        <div className={cn(styles.sectionWrapper, 'left-0 w-full')}>
          <h2 className="flex flex-col text-xl font-semibold mb-5">Projects</h2>
          <ul className="flex flex-col list-disc ml-6">
            <li>
              <Link href={'/projects/1'} className="hover:font-medium">
                Expensy
              </Link>
            </li>

            <li>
              <Link href={'/projects/2'} className="hover:font-medium">
                Books & More
              </Link>
            </li>

            <li>
              <Link href={'/projects/3'} className="hover:font-medium">
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
