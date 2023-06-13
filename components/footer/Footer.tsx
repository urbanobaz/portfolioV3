import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styles from './Footer.module.css';
import { cn } from '@/app/helpers/utils';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.hrContainer}>
          <hr className={styles.hrLine} />
        </div>
        <ul className="flex justify-center" id="social">
          <li className={styles.socialLink}>
            <a
              href="https://github.com/urbanobaz"
              aria-label="Link to Urbano's Github"
              className={styles.footerIcon}
            >
              <i className="fab fa-github"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a
              href="https://www.linkedin.com/in/urbanobaz"
              aria-label="Link to Urbano's LinkedIn"
              className={styles.footerIcon}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a
              href="https://www.youtube.com/@ubazdevelops"
              aria-label="Link to Urbano's Youtube"
              className={styles.footerIcon}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className={styles.socialLink}>
            <a
              href="https://twitter.com/ubaz_3"
              aria-label="Link to Urbano's Twitter"
              className={styles.footerIcon}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
        <p className="flex justify-center mt-5">
          &copy; {year} Urbano Baz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
