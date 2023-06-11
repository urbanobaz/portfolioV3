'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import PalmTree from '/public/favicon.ico';
import { cn } from '@/app/helpers/utils';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <div className="flex justify-center w-full">
      <nav
        className={cn(
          styles.navbarContainer,
          'h-14 flex w-full justify-between'
        )}
      >
        <Link
          className="flex justify-center flex-col text-2xl cursor-pointer"
          href={'/'}
        >
          <Image height={30} src={PalmTree} alt={'Logo'} />
        </Link>

        <div
          className={cn('flex justify-center flex-col', styles.linksContainer)}
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
      </nav>
      <div
        className={cn(
          'flex flex-col px-10 w-full pt-3',
          styles.dropdownContainer,
          !dropdownVisible && styles.disabled
        )}
      >
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'#about'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          About
        </Link>
        <Link
          className="mr-4 cursor-pointer h-10 font-medium hover:font-bold"
          href={'#projects'}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
