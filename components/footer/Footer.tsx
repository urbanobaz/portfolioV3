import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
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
  );
};

export default Footer;
