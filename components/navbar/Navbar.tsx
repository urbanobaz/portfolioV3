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
  return (
    <div
      className={cn(
        styles.navbarWrapper,
        'flex justify-center w-full bg-blue-50'
      )}
    >
      <AnimatePresence>
        <nav
          className={cn(
            styles.navbarContainer,
            'h-14 flex w-full justify-between'
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.75 }}
            className="flex justify-between w-full"
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
                'flex justify-center flex-col',
                styles.linksContainer
              )}
            >
              <ul className="flex">
                <li>
                  <Link
                    className="mr-4 cursor-pointer font-medium hover:font-semibold"
                    href={'/#about'}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="mr-4 cursor-pointer font-medium hover:font-semibold"
                    href={'/#tech'}
                  >
                    Tech Stack
                  </Link>
                </li>
                <li>
                  <Link
                    className="mr-4 cursor-pointer font-medium hover:font-semibold"
                    href={'/#projects'}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className={cn(
                'flex justify-center flex-col',
                styles.linksIconContainer
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
          'flex flex-col px-10 w-full pt-3 bg-blue-50',
          styles.dropdownContainer,
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
