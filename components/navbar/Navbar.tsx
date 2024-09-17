'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import PalmTree from '/public/favicon.ico';
import { cn } from '@/app/helpers/utils';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shortVersionNav, setShortVersionNav] = useState(false);
  return (
    <div className={cn(styles.navbarWrapper, 'flex justify-center w-full')}>
      <AnimatePresence>
        <nav
          className={cn(
            styles.navbarContainer,
            'h-14 flex justify-between rounded-full',
            shortVersionNav ? styles.shortNav : null
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.75 }}
            className={cn(styles.navbarInnerWrapper, 'flex justify-between')}
          >
            <Link
              className="flex justify-center flex-col text-2xl cursor-pointer"
              href={'/'}
            >
              <Image
                className={styles.palmTreeLogo}
                height={30}
                src={PalmTree}
                alt={'Logo'}
              />
            </Link>

            <div
              className={cn(
                styles.linksContainer,
                'flex justify-center flex-col mr-2'
              )}
            >
              <ul className="flex">
                <li>
                  <Link
                    className={cn(
                      styles.link,
                      'mr-8 cursor-pointer font-medium text-black'
                    )}
                    href={'/#about'}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.link,
                      'mr-8 cursor-pointer font-medium text-black'
                    )}
                    href={'/#work'}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.link,
                      'mr-8 cursor-pointer font-medium text-black'
                    )}
                    href={'/#tech'}
                  >
                    Tech-stack
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      styles.link,
                      'mr-4 cursor-pointer font-medium text-black'
                    )}
                    href={'/#projects'}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <button
              id="dropdown-button"
              className={cn(
                styles.linksIconContainer,
                'flex justify-center flex-col'
              )}
              type="button"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              {dropdownVisible ? (
                <FontAwesomeIcon icon={faX} />
              ) : (
                <FontAwesomeIcon icon={faBarsStaggered} />
              )}
            </button>
          </motion.div>
        </nav>
      </AnimatePresence>
      <div
        className={cn(
          styles.dropdownContainer,
          'flex flex-col px-10 w-full pt-3 bg-blue-50',
          !dropdownVisible && styles.disabled
        )}
      >
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'/#about'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          About
        </Link>
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'/#work'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          Work
        </Link>
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'/#tech'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          Tech Stack
        </Link>
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'/#projects'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
