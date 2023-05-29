'use client';
import React from 'react';
import Image from 'next/image';
import headshot from '../../public/finalheadshotedit.png';
import styles from '../../styles/Links.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const Links = () => {
  const router = useRouter();
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkListContainer}>
        <div className={styles.linkListContainer}>
          <button
            className={styles.linkButton}
            onClick={(e) => {
              router.push('https://urbanobaz.com');
            }}
          >
            <FontAwesomeIcon icon={faUser} className={styles.linkIcon} />
            <p>Portfolio</p>
          </button>
          <button
            className={styles.linkButton}
            onClick={(e) => {
              router.push('https://linkedin.com/in/urbanobaz');
            }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.linkIcon} />
            <p>LinkedIn</p>
          </button>
          <button
            className={styles.linkButton}
            onClick={(e) => {
              router.push('https://github.com/urbanobaz');
            }}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.linkIcon} />
            <p>Github</p>
          </button>
          <button
            className={styles.linkButton}
            onClick={(e) => {
              router.push('https://twitter.com/ubaz_3');
            }}
          >
            <FontAwesomeIcon icon={faTwitter} className={styles.linkIcon} />
            <p>Twitter</p>
          </button>
        </div>
      </div>
      <div className={styles.pictureContainer}>
        <a href="https://www.urbanobaz.com/" className={styles['link-picture']}>
          <Image
            id="pictureImage"
            className={styles.pictureImage}
            src={headshot}
            alt="Portrait of Urbano Baz"
          />
        </a>
      </div>
    </div>
  );
};

export default Links;
